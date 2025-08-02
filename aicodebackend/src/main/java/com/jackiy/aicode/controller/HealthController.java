package com.jackiy.aicode.controller;

import com.jackiy.aicode.common.BaseResponse;
import com.jackiy.aicode.common.ResultUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 健康检查控制器
 * @author jackiy
 * @date 2023/1/1 14:25
 */
@RestController
@RequestMapping("/health")
public class HealthController {
    @GetMapping("/healthCheck")
    public String healthCheck1() {
        return "ok";
    }
    @GetMapping("/")
    public BaseResponse<String> healthCheck() {
        return ResultUtils.success( "ok");
    }
}
