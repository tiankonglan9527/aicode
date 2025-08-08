-- 创建库
create database if not exists ai_code;
-- 切换库
use ai_code;

-- 用户表
create table if not exists user
(
    id           bigint auto_increment comment 'id' primary key,
    userAccount  varchar(256)                           not null comment '账号',
    userPassword varchar(512)                           not null comment '密码',
    userName     varchar(256)                           null comment '用户昵称',
    userAvatar   varchar(1024)                          null comment '用户头像',
    userProfile  varchar(512)                           null comment '用户简介',
    userRole     varchar(256) default 'user'            not null comment '用户角色：user/admin',
    editTime     datetime     default CURRENT_TIMESTAMP not null comment '编辑时间',
    createTime   datetime     default CURRENT_TIMESTAMP not null comment '创建时间',
    updateTime   datetime     default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    isDelete     tinyint      default 0                 not null comment '是否删除',
    UNIQUE KEY uk_userAccount (userAccount),
    INDEX idx_userName (userName)
) comment '用户' collate = utf8mb4_unicode_ci;

-- 应用表
create table if not exists app
(
    id           bigint auto_increment comment 'id' primary key,
    appName      varchar(256)                       null comment '应用名称',
    cover        varchar(512)                       null comment '应用封面',
    initPrompt   text                               null comment '应用初始化的 prompt',
    codeGenType  varchar(64)                        null comment '代码生成类型（枚举）',
    deployKey    varchar(64)                        null comment '部署标识',
    deployedTime datetime                           null comment '部署时间',
    priority     int      default 0                 not null comment '优先级',
    userId       bigint                             not null comment '创建用户id',
    editTime     datetime default CURRENT_TIMESTAMP not null comment '编辑时间',
    createTime   datetime default CURRENT_TIMESTAMP not null comment '创建时间',
    updateTime   datetime default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP comment '更新时间',
    isDelete     tinyint  default 0                 not null comment '是否删除',
    UNIQUE KEY uk_deployKey (deployKey), -- 确保部署标识唯一
    INDEX idx_appName (appName),         -- 提升应用名称的查询性能
    INDEX idx_userId (userId)            -- 提升用户ID的查询性能
) comment '应用' collate = utf8mb4_unicode_ci;

create table if not exists chat_history
(
    id           bigint auto_increment comment 'id' primary key,
    message      text                               not null comment '消息',
    messageType  varchar(32)                        not null comment '消息类型user/ai',
    appId        bigint                             not null comment '应用id',
    userId       bigint                             not null comment '创建用户id',
    createTime   datetime default current_timestamp not null comment '创建时间',
    updateTime   datetime default current_timestamp not null on update current_timestamp comment '更新时间',
    isDelete     tinyint  default 0                 not null comment '逻辑删除，1删除0不删除',
    index idx_appId (appId),                        -- 查询应用id的普通索引
    index idx_createTime (createTime),              -- 查询时间的普通索引
    index idx_appId_createTime (appId,createTime)   -- 游标查询核心索引
) comment '历史对话' collate = utf8mb4_unicode_ci;

