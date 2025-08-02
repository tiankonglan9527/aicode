package com.jackiy.aicode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

// 开启AspectJ自动代理的支持
@EnableAspectJAutoProxy(exposeProxy = true)
@SpringBootApplication
public class AicodebackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AicodebackendApplication.class, args);
    }

}
