package com.jackiy.aicode.service;

import com.jackiy.aicode.model.dto.chathistory.ChatHistoryQueryRequest;
import com.jackiy.aicode.model.entity.ChatHistory;
import com.jackiy.aicode.model.entity.User;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import com.mybatisflex.core.service.IService;
import dev.langchain4j.memory.chat.MessageWindowChatMemory;

import java.time.LocalDateTime;

/**
 * 历史对话 服务层。
 */
public interface ChatHistoryService extends IService<ChatHistory> {

    /**
     * 添加聊天记录
     *
     * @param appId         应用ID
     * @param message       消息内容
     * @param messageType   消息类型
     * @param userId        用户ID
     * @return 是否添加成功
     */
    boolean addChatMessage(Long appId, String message, String messageType, Long userId);


    /**
     * 删除应用的所有聊天记录
     *
     * @param appId 应用ID
     * @return 是否删除成功
     */
    boolean deleteByAppId(Long appId);

    /**
     * 获取查询包装类
     *
     * @param chatHistoryQueryRequest 查询请求
     * @return 查询包装类
     */
    QueryWrapper getQueryWrapper(ChatHistoryQueryRequest chatHistoryQueryRequest);

    /**
     * 游标查询应用的聊天记录
     * @param appId             应用ID
     * @param pageSize          每页数量
     * @param lastCreateTime    最后创建时间
     * @param loginUser         登录用户
     * @return 聊天记录列表
     */
    Page<ChatHistory> listAppChatHistoryByPage(Long appId, int pageSize,
                                               LocalDateTime lastCreateTime,
                                               User loginUser);

    /**
     * 加载应用的聊天记录到内存
     *
     * @param appId             应用ID
     * @param chatMemory        聊天内存
     * @param maxCount          最大加载数量
     * @return 加载数量
     */
    int loadChatHistoryToMemory(Long appId, MessageWindowChatMemory chatMemory, int maxCount);
}
