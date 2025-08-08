package com.jackiy.aicode.ai;

import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.chat.StreamingChatModel;
import dev.langchain4j.service.AiServices;
import jakarta.annotation.Resource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * AI服务创建工厂
 */
@Configuration
public class AiCodeGeneratorServiceFactory {

    @Resource
    private ChatModel chatModel;

    // 流式模型
    @Resource
    private StreamingChatModel streamingChatModel;

    /**
     * 会用动态代理创建AI代码生成器服务，注册到IOC容器
     *
     * @return AI代码生成器服务对象
     */
    @Bean
    public AiCodeGeneratorService aiCodeGeneratorService() {
        // 改用builder构造，builder模式可以更灵活地配置服务
        return AiServices.builder(AiCodeGeneratorService.class)
                .chatModel(chatModel)
                .streamingChatModel(streamingChatModel)
                .build();
    }
}

