package com.jackiy.aicode.ai.model;

import jdk.jfr.Description;
import lombok.Data;

/**
 * 使用三件套生成的结果
 * langchain4j 也会把描述注解的信息也发送给AI
 */
@Description("生成多个代码文件的结果")
@Data
public class MultiFileCodeResult {

    @Description("HTML代码")
    private String htmlCode;

    @Description("CSS代码")
    private String cssCode;

    @Description("JS代码")
    private String jsCode;

    @Description("生成代码的描述")
    private String description;
}
