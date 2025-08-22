package com.jackiy.aicode.langgraph4j.tools;

import jakarta.annotation.Resource;
import org.springframework.boot.test.context.SpringBootTest;

import com.jackiy.aicode.langgraph4j.model.ImageResource;
import com.jackiy.aicode.langgraph4j.model.enums.ImageCategoryEnum;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class UndrawIllustrationToolTest {

    @Resource
    private UndrawIllustrationTool undrawIllustrationTool;

    @Test
    void testSearchIllustrations() {
        List<ImageResource> illustrations = undrawIllustrationTool.searchIllustrations("happynewyear");
        assertNotNull(illustrations, "插画列表不应为null");

        // 仅当列表非空时才验证元素
        if (!illustrations.isEmpty()) {
            ImageResource firstIllustration = illustrations.get(0);
            assertEquals(ImageCategoryEnum.ILLUSTRATION, firstIllustration.getCategory());
            assertNotNull(firstIllustration.getDescription(), "插画描述不应为null");
            assertNotNull(firstIllustration.getUrl(), "插画URL不应为null");
            assertTrue(firstIllustration.getUrl().startsWith("http"), "URL应以http开头");
            System.out.println("搜索到 " + illustrations.size() + " 张插画");
            illustrations.forEach(illustration ->
                    System.out.println("插画: " + illustration.getDescription() + " - " + illustration.getUrl())
            );
        } else {
            System.out.println("未搜索到插画，请检查网络或API配置");
        }
    }

}
