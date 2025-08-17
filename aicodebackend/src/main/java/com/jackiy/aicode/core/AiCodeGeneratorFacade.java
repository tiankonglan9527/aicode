package com.jackiy.aicode.core;

import com.jackiy.aicode.ai.AiCodeGeneratorService;
import com.jackiy.aicode.ai.AiCodeGeneratorServiceFactory;
import com.jackiy.aicode.ai.model.HtmlCodeResult;
import com.jackiy.aicode.ai.model.MultiFileCodeResult;
import com.jackiy.aicode.core.parser.CodeParserExecutor;
import com.jackiy.aicode.core.saver.CodeFileSaverExecutor;
import com.jackiy.aicode.exception.BusinessException;
import com.jackiy.aicode.exception.ErrorCode;
import com.jackiy.aicode.model.enums.CodeGenTypeEnum;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.io.File;

/**
 * AI代码生成门面类，组合代码生成和保存功能
 * 提供一个统一的入口，根据不同的生成类型，调用不同的代码生成服务
 * 相当于一个前台，告诉它我的需要，前台根据需求给我们提供功能，不需要我们关注底层细节
 */
@Slf4j
@Service
public class AiCodeGeneratorFacade {

    @Resource
    private AiCodeGeneratorServiceFactory aiCodeGeneratorServiceFactory;

    /**
     * 统一入口：根据类型生成并保存代码（使用 appId）
     *
     * @param userMessage     用户提示词
     * @param codeGenTypeEnum 生成类型
     * @return 保存的目录
     */
    public File generateAndSaveCode(String userMessage, CodeGenTypeEnum codeGenTypeEnum, Long appId) {
        if (codeGenTypeEnum == null) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "生成类型为空");
        }
        // 根据 appId 获取对应的 AI 服务实例
        AiCodeGeneratorService aiCodeGeneratorService = aiCodeGeneratorServiceFactory.getAiCodeGeneratorService(appId, codeGenTypeEnum);
        return switch (codeGenTypeEnum) {
            case HTML -> {
                HtmlCodeResult result = aiCodeGeneratorService.generateHtmlCode(userMessage);
                yield CodeFileSaverExecutor.executeSaver(result, CodeGenTypeEnum.HTML, appId);
            }
            case MULTI_FILE -> {
                MultiFileCodeResult result = aiCodeGeneratorService.generateMultiFileCode(userMessage);
                yield CodeFileSaverExecutor.executeSaver(result, CodeGenTypeEnum.MULTI_FILE, appId);
            }
            default -> {
                String errorMessage = "不支持的生成类型：" + codeGenTypeEnum.getValue();
                throw new BusinessException(ErrorCode.SYSTEM_ERROR, errorMessage);
            }
        };
    }

    /**
     * 统一入口：根据类型生成并保存代码（流式，使用 appId）
     *
     * @param userMessage     用户提示词
     * @param codeGenTypeEnum 生成类型
     * @param appId           应用 ID
     */
    public Flux<String> generateAndSaveCodeStream(String userMessage, CodeGenTypeEnum codeGenTypeEnum, Long appId) {
        if (codeGenTypeEnum == null) {
            throw new BusinessException(ErrorCode.SYSTEM_ERROR, "生成类型为空");
        }
        // 根据 appId 获取对应的 AI 服务实例
        AiCodeGeneratorService aiCodeGeneratorService = aiCodeGeneratorServiceFactory.getAiCodeGeneratorService(appId, codeGenTypeEnum);
        return switch (codeGenTypeEnum) {
            case HTML -> {
                Flux<String> codeStream = aiCodeGeneratorService.generateHtmlCodeStream(userMessage);
                yield processCodeStream(codeStream, CodeGenTypeEnum.HTML, appId);
            }
            case MULTI_FILE -> {
                Flux<String> codeStream = aiCodeGeneratorService.generateMultiFileCodeStream(userMessage);
                yield processCodeStream(codeStream, CodeGenTypeEnum.MULTI_FILE, appId);
            }
            case VUE_PROJECT -> {
                Flux<String> codeStream = aiCodeGeneratorService.generateVueProjectCodeStream(appId, userMessage);
                yield processCodeStream(codeStream, CodeGenTypeEnum.MULTI_FILE, appId);
            }
            default -> {
                String errorMessage = "不支持的生成类型：" + codeGenTypeEnum.getValue();
                throw new BusinessException(ErrorCode.SYSTEM_ERROR, errorMessage);
            }
        };
    }


    /**
     * 生成 HTML 模式的代码并保存（结构输出）
     *
     * @param userMessage 用户提示词
     * @return 保存的目录
     */
//    private File generateAndSaveHtmlCode(String userMessage) {
//        HtmlCodeResult result = aiCodeGeneratorService.generateHtmlCode(userMessage);
//        return CodeFileSaver.saveHtmlCodeResult(result);
//    }

    /**
     * 生成多文件模式的代码并保存（结构输出）
     *
     * @param userMessage 用户提示词
     * @return 保存的目录
     */
//    private File generateAndSaveMultiFileCode(String userMessage) {
//        MultiFileCodeResult result = aiCodeGeneratorService.generateMultiFileCode(userMessage);
//        return CodeFileSaver.saveMultiFileCodeResult(result);
//    }

    /**
     * 生成 HTML 模式的代码并保存（流式输出）
     *
     * @param userMessage 用户提示词
     * @return 流式输出的 HTML 代码
     */
//    private Flux<String> generateAndSaveHtmlCodeStream(String userMessage) {
//        // 调用流式生成HTML方法，LangChain4J调用大模型，大模型实时返回流式片段，Flux将返回的片段按chunk实时发送到流中
//        Flux<String> result = aiCodeGeneratorService.generateHtmlCodeStream(userMessage);
//
//        StringBuilder codeBuilder = new StringBuilder();
//        return result
//                // doOnNext：每返回一个块调用一次
//                .doOnNext(chunk -> {
//                    // 实时收集代码片段到StringBuilder
//                    codeBuilder.append(chunk);
//                })
//                // doOnComplete：流完成时调用(即AI生成完成时)
//                .doOnComplete(() -> {
//                    try {
//                        // 流完成后，将收集到的代码片段发送给AI模型，AI模型根据提示词生成完整的HTML代码
//                        String completeHtmlCode = codeBuilder.toString();
//                        HtmlCodeResult htmlCodeResult = aiCodeGeneratorService.generateHtmlCode(completeHtmlCode);
//                        // 保存代码到文件
//                        File savedDir = CodeFileSaver.saveHtmlCodeResult(htmlCodeResult);
//                        log.info("保存成功，路径为: {}", savedDir.getAbsolutePath());
//                    } catch (Exception e) {
//                        log.error("保存 HTML 代码失败: {}", e.getMessage());
//                    }
//                });
//    }

    /**
     * 生成多文件模式的代码并保存（流式）
     *
     * @param userMessage 用户提示词
     * @return 保存的目录
     */
//    private Flux<String> generateAndSaveMultiFileCodeStream(String userMessage) {
//        Flux<String> result = aiCodeGeneratorService.generateMultiFileCodeStream(userMessage);
//        StringBuilder codeBuilder = new StringBuilder();
//        return result
//                .doOnNext(chunk -> {
//                    // 实时收集代码片段
//                    codeBuilder.append(chunk);
//                })
//                .doOnComplete(() -> {
//                    try {
//                        String completeMultiFileCode = codeBuilder.toString();
//                        MultiFileCodeResult multiFileResult = CodeParser.parseMultiFileCode(completeMultiFileCode);
//                        // 保存代码到文件
//                        File savedDir = CodeFileSaver.saveMultiFileCodeResult(multiFileResult);
//                        log.info("保存成功，路径为：" + savedDir.getAbsolutePath());
//                    } catch (Exception e) {
//                        log.error("保存失败: {}", e.getMessage());
//                    }
//                });
//    }

    /**
     * 通用流式代码处理方法（使用 appId）
     *
     * @param codeStream  代码流
     * @param codeGenType 代码生成类型
     * @param appId       应用 ID
     * @return 流式响应
     */
    private Flux<String> processCodeStream(Flux<String> codeStream, CodeGenTypeEnum codeGenType, Long appId) {
        StringBuilder codeBuilder = new StringBuilder();
        return codeStream.doOnNext(chunk -> {
            // 实时收集代码片段
            codeBuilder.append(chunk);
        }).doOnComplete(() -> {
            // 流式返回完成后保存代码
            try {
                String completeCode = codeBuilder.toString();
                // 使用执行器解析代码
                Object parsedResult = CodeParserExecutor.executeParser(completeCode, codeGenType);
                // 使用执行器保存代码
                File savedDir = CodeFileSaverExecutor.executeSaver(parsedResult, codeGenType, appId);
                log.info("保存成功，路径为：" + savedDir.getAbsolutePath());
            } catch (Exception e) {
                log.error("保存失败: {}", e.getMessage());
            }
        });
    }

}
