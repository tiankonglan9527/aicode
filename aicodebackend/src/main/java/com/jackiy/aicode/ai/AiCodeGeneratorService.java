/**
 * AI代码生成器服务接口
 * 考虑到系统提示词通常比较长，将它们单独维护在资源文件中:resource/prompt
 * codegen-html-system-prompt.txt:       原生 HTML 模式
 * codegen-multi-file-system-prompt.txt: 原生三件套模式
 *
 * 注意:
 * 1. 所有方法都使用 @SystemMessage 注解，指定系统提示词资源文件,也就是告诉AI需求。
 */
package com.jackiy.aicode.ai;

import com.jackiy.aicode.ai.model.HtmlCodeResult;
import com.jackiy.aicode.ai.model.MultiFileCodeResult;
import dev.langchain4j.service.SystemMessage;

public interface AiCodeGeneratorService {

    /**
     * 生成 HTML 代码
     *
     * @param userMessage 用户消息
     * @return 生成的代码结果
     */
    @SystemMessage(fromResource = "prompt/codegen-html-system-prompt.txt")
    HtmlCodeResult generateHtmlCode(String userMessage);

    /**
     * 生成多文件代码
     *
     * @param userMessage 用户消息
     * @return 生成的代码结果
     */
    @SystemMessage(fromResource = "prompt/codegen-multi-file-system-prompt.txt")
    MultiFileCodeResult generateMultiFileCode(String userMessage);
}

