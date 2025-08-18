package com.jackiy.aicode.annotation;

import java.lang.annotation.*;

/**
 * 防止重复提交接口注解（笔试挂的题，做了个Demo
 * 给方法打上，然后指定时间，在指定时间内不能重复提交
 * 可以根据2种方式进行限制：参数或token
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RepeatSubmit {
    // 可以根据2种方式进行限制：参数或token
    enum Type {PARAM, TOKEN}

    // 采用哪种方式，默认是参数方式
    Type limitType() default Type.PARAM;

    // 多少秒内不能重复提交，默认2秒
    long lockTime() default 2;
}
