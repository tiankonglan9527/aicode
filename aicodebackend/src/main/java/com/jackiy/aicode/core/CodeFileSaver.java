package com.jackiy.aicode.core;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.jackiy.aicode.ai.model.HtmlCodeResult;
import com.jackiy.aicode.ai.model.MultiFileCodeResult;
import com.jackiy.aicode.model.enums.CodeGenTypeEnum;

import java.io.File;
import java.nio.charset.StandardCharsets;

/**
 * 文件保存器（工具类）
 * 一个工具类，把AI生成的代码文件保存到系统本地
 *
 * 可优化点：增加日期分类
 */
public class CodeFileSaver {

    // 文件保存根目录：文件保存的根路径 = 当前项目的路径 + /tmp/code_output
    private static final String FILE_SAVE_ROOT_DIR = System.getProperty("user.dir") + "/tmp/code_output";

    /**
     * 保存 HtmlCodeResult（单文件） 到系统本地
     *
     * @param result 单文件AI生成结果对象
     * @return 保存的文件目录
     */
    public static File saveHtmlCodeResult(HtmlCodeResult result) {
        // 根据生成类型构建保存路径
        String baseDirPath = buildUniqueDir(CodeGenTypeEnum.HTML.getValue());
        // 写入文件到该路径下
        writeToFile(baseDirPath, "index.html", result.getHtmlCode());
        return new File(baseDirPath);
    }

    /**
     * 保存 MultiFileCodeResult（多文件） 到系统本地
     *
     * @param result 多文件AI生成结果对象
     * @return 保存的文件目录
     */
    public static File saveMultiFileCodeResult(MultiFileCodeResult result) {
        String baseDirPath = buildUniqueDir(CodeGenTypeEnum.MULTI_FILE.getValue());
        writeToFile(baseDirPath, "index.html", result.getHtmlCode());
        writeToFile(baseDirPath, "style.css", result.getCssCode());
        writeToFile(baseDirPath, "script.js", result.getJsCode());
        return new File(baseDirPath);
    }

    /**
     * 构建唯一目录路径：tmp/code_output/bizType_雪花ID
     *
     * @param bizType 代码生成类型
     * @return 唯一目录路径
     */
    private static String buildUniqueDir(String bizType) {
        String uniqueDirName = StrUtil.format("{}_{}", bizType, IdUtil.getSnowflakeNextIdStr());
        // 保存的路径 = 根路径 + 分隔符 + 生成类型 + 唯一id（雪花id）
        String dirPath = FILE_SAVE_ROOT_DIR + File.separator + uniqueDirName;
        FileUtil.mkdir(dirPath);    // 创建目录
        return dirPath;
    }

    /**
     * 写入单个文件
     */
    private static void writeToFile(String dirPath, String filename, String content) {
        String filePath = dirPath + File.separator + filename;
        FileUtil.writeString(content, filePath, StandardCharsets.UTF_8);
    }
}
