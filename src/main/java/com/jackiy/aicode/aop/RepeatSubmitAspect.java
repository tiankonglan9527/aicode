package com.jackiy.aicode.aop;

import cn.hutool.core.util.StrUtil;
import com.jackiy.aicode.annotation.RepeatSubmit;
import com.jackiy.aicode.exception.BusinessException;
import com.jackiy.aicode.exception.ErrorCode;
import jakarta.servlet.http.HttpServletRequest;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * 重复提交校验切面
 * 正常应该用Redis去实现，而不是自己维护一个内存缓存
 */
@Aspect
@Component
public class RepeatSubmitAspect {

    // 缓存：存储已提交的请求标识（Key: 唯一标识，Value: 是否已提交）
    private final TtlCache<String, Boolean> submitCache = new TtlCache<>();

    @Around("@annotation(repeatSubmit)")
    public Object doInterceptor(ProceedingJoinPoint joinPoint, RepeatSubmit repeatSubmit) throws Throwable {
        // 1. 获取请求上下文（防御性检查）
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "请求上下文不存在");
        }
        HttpServletRequest request = attributes.getRequest();
        if (request == null) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "请求对象不存在");
        }

        // 2. 生成缓存 Key 的前缀（固定部分）
        String keyPrefix = ":repeat_submit:";
        String url = StrUtil.isBlank(request.getRequestURI()) ? "" : request.getRequestURI(); // 防御性处理空值
        String ipAddress = StrUtil.isBlank(request.getRemoteAddr()) ? "" : request.getRemoteAddr(); // 防御性处理空值

        // 3. 根据注解类型生成完整 Key（防御性检查）
        String key = buildCacheKey(repeatSubmit, keyPrefix, url, ipAddress, request, joinPoint);

        // 4. 检查缓存中是否已存在该 Key（即是否重复提交）
        Boolean isRepeated = submitCache.get(key);
        if (Boolean.TRUE.equals(isRepeated)) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "重复提交，请稍后再试");
        }

        // 5. 不存在则标记为已提交，并设置过期时间（锁定期）
        submitCache.put(key, true, repeatSubmit.lockTime() * 1000L); // 转换为毫秒

        try {
            // 执行原始方法（放行请求）
            return joinPoint.proceed();
        } finally {
            // 可选：提前释放锁（根据业务需求决定是否保留）
            // submitCache.evict(key);
        }
    }

    /**
     * 构建缓存 Key（新增防御性参数检查）
     */
    private String buildCacheKey(RepeatSubmit repeatSubmit, String keyPrefix, String url, String ipAddress,
                                 HttpServletRequest request, ProceedingJoinPoint joinPoint) {
        // 防御性检查：确保 joinPoint 非空（理论上不会，但显式检查更安全）
        if (joinPoint == null) {
            throw new IllegalArgumentException("ProceedingJoinPoint 不能为 null");
        }

        StringBuilder keyBuilder = new StringBuilder(keyPrefix)
                .append(ipAddress).append("-") // 客户端 IP
                .append(url).append("-");       // 请求路径

        String limitType = repeatSubmit.limitType().name();
        if (limitType.equalsIgnoreCase(RepeatSubmit.Type.PARAM.name())) {
            // 参数方式：安全获取 MethodSignature（新增类型检查）
            Signature signature = joinPoint.getSignature();
            if (!(signature instanceof MethodSignature)) {
                throw new BusinessException(ErrorCode.PARAMS_ERROR, "仅支持拦截普通方法（非构造方法/静态方法）");
            }
            MethodSignature methodSignature = (MethodSignature) signature; // 安全转换

            // 获取类名和方法名（防御性检查）
            Method method = methodSignature.getMethod();
            if (method == null) {
                throw new BusinessException(ErrorCode.PARAMS_ERROR, "方法信息不存在");
            }
            String className = method.getDeclaringClass().getName(); // 类全限定名
            String methodName = method.getName();                   // 方法名

            // 拼接类名和方法名到缓存键
            keyBuilder.append(className).append("-").append(methodName);
        } else if (limitType.equalsIgnoreCase(RepeatSubmit.Type.TOKEN.name())) {
            // 令牌方式：从请求头获取 Token（防御性检查）
            String token = request.getHeader("X-Token");
            if (StrUtil.isBlank(token)) {
                throw new BusinessException(ErrorCode.PARAMS_ERROR, "缺少 Token 参数（X-Token）");
            }
            keyBuilder.append(token); // 直接使用 Token 作为标识（可结合 IP 增强唯一性）
        } else {
            throw new BusinessException(ErrorCode.PARAMS_ERROR, "不支持的重复提交类型：" + limitType);
        }

        // 对 Key 进行 MD5 哈希（避免特殊字符或过长）
        return DigestUtils.md5DigestAsHex(keyBuilder.toString().getBytes(StandardCharsets.UTF_8));
    }

    /**
     * 带过期时间的本地缓存（线程安全）
     */
    static class TtlCache<K, V> {
        private final Map<K, CacheEntry<V>> cache = new ConcurrentHashMap<>();
        private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

        // 缓存条目（包含值和过期时间）
        private static class CacheEntry<V> {
            V value;
            long expireTime;

            CacheEntry(V value, long ttlMillis) {
                this.value = value;
                this.expireTime = System.currentTimeMillis() + ttlMillis;
            }
        }

        // 存入缓存（带 TTL，线程安全）
        public void put(K key, V value, long ttlMillis) {
            CacheEntry<V> entry = new CacheEntry<>(value, ttlMillis);
            cache.put(key, entry);
            // 定时清理过期条目（使用单线程调度，避免并发问题）
            scheduler.schedule(() -> {
                if (entry.expireTime <= System.currentTimeMillis()) {
                    cache.remove(key); // 线程安全的 remove 操作
                }
            }, ttlMillis, TimeUnit.MILLISECONDS);
        }

        // 获取缓存（检查是否过期，线程安全）
        public V get(K key) {
            CacheEntry<V> entry = cache.get(key);
            if (entry == null || entry.expireTime <= System.currentTimeMillis()) {
                cache.remove(key); // 过期则删除（线程安全）
                return null;
            }
            return entry.value;
        }
    }
}