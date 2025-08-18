package com.jackiy.aicode.mapper;

import com.jackiy.aicode.model.entity.User;
import com.mybatisflex.core.BaseMapper;
import com.mybatisflex.core.query.QueryWrapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 用户 映射层。
 *
 * @author <a href="https://github.com/tiankonglan9527">天空岚</a>
 */
public interface UserMapper extends BaseMapper<User> {

}
