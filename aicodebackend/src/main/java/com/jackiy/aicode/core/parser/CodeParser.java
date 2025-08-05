/**
 * 优化解析器：使用策略模式
 * 之前的逻辑：
 *      根据单文件、多文件两种类型生成AI内容，他们的解析逻辑都写在同一个类里面
 * 优化后的逻辑：
 *      提供一个解析器策略接口，定义了解析代码内容的方法，方法具体细节由实现类去实现
 */
package com.jackiy.aicode.core.parser;

/**
 * 代码解析器策略接口
 * 定义了解析代码内容的方法，不同的解析器实现不同的解析逻辑
 */
public interface CodeParser<T> {

    /**
     * 解析代码内容
     *
     * @param codeContent 原始代码内容
     * @return 解析后的结果对象
     */
    T parseCode(String codeContent);
}
