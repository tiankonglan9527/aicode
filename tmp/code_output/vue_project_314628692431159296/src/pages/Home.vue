<template>
  <div class="home">
    <h1>最新文章</h1>
    <div class="articles">
      <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </div>
</template>

<script setup>
import ArticleCard from '@/components/ArticleCard.vue'

const articles = [
  { id: 1, title: 'Vue3 组合式 API 入门', summary: '学习如何使用 Vue3 的组合式 API 进行开发。', image: 'https://picsum.photos/300/200?random=1' },
  { id: 2, title: '前端工程化实践', summary: '探讨现代前端工程化的最佳实践。', image: 'https://picsum.photos/300/200?random=2' },
  { id: 3, title: '响应式设计技巧', summary: '掌握响应式设计的核心技巧。', image: 'https://picsum.photos/300/200?random=3' }
]
</script>

<style>
.home {
  padding: 2rem;
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>