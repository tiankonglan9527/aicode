package com.jackiy.aicode;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

// 开启AspectJ自动代理的支持
@EnableAspectJAutoProxy(exposeProxy = true)
// 扫描Mapper接口
@MapperScan("com.jackiy.aicode.mapper")
@SpringBootApplication
public class AicodebackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AicodebackendApplication.class, args);
    }

}
