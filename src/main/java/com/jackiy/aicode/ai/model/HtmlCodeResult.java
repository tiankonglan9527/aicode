package com.jackiy.aicode.ai.model;

import jdk.jfr.Description;
import lombok.Data;

/**
 * HTML代码AI生成结果
 */
@Description("生成 HTML 代码文件的结果")
@Data
public class HtmlCodeResult {
    @Description("HTML代码")
    private String htmlCode;

    @Description("生成代码的描述")
    private String description;
}
