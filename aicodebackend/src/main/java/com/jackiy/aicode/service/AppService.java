package com.jackiy.aicode.service;

import com.jackiy.aicode.model.dto.app.AppAddRequest;
import com.jackiy.aicode.model.dto.app.AppQueryRequest;
import com.jackiy.aicode.model.dto.app.AppUpdateRequest;
import com.jackiy.aicode.model.entity.App;
import com.jackiy.aicode.model.entity.User;
import com.jackiy.aicode.model.vo.AppVO;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import com.mybatisflex.core.service.IService;
import jakarta.servlet.http.HttpServletRequest;
import reactor.core.publisher.Flux;

import java.util.List;

/**
 * 应用 服务层。
 */
public interface AppService extends IService<App> {

    /**
     * 获取应用封装类
     *
     * @param app
     * @return
     */
    AppVO getAppVO(App app);

    /**
     * 获取应用封装类列表
     *
     * @param appList
     * @return
     */
    List<AppVO> getAppVOList(List<App> appList);

    /**
     * 构造应用查询条件
     *
     * @param appQueryRequest
     * @return
     */
    QueryWrapper getQueryWrapper(AppQueryRequest appQueryRequest);

    // 应用对话
    Flux<String> chatToGenCode(Long appId, String message, User loginUser);

    // 部署应用
    String deployApp(Long appId, User loginUser);
}
