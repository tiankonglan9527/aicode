<template>
  <div class="home">
    <h1>最新文章</h1>
    <div v-for="article in latestArticles" :key="article.id" class="article-card">
      <h2>{{ article.title }}</h2>
      <p>{{ article.summary }}</p>
      <router-link :to="`/article/${article.id}">阅读更多</router-link>
    </div>

    <h1>热门推荐</h1>
    <div v-for="article in popularArticles" :key="article.id" class="article-card">
      <h2>{{ article.title }}</h2>
      <p>{{ article.summary }}</p>
      <router-link :to="`/article/${article.id}">阅读更多</router-link>
    </div>
  </div>
</template>

<script setup>
const latestArticles = [
  { id: 1, title: 'Vue3 新特性解析', summary: '详细介绍 Vue3 的新特性和使用方法。' },
  { id: 2, title: '前端工程化实践', summary: '分享前端工程化的最佳实践。' }
]

const popularArticles = [
  { id: 3, title: '响应式设计指南', summary: '如何实现完美的响应式设计。' },
  { id: 4, title: 'Markdown 语法大全', summary: 'Markdown 语法的详细教程。' }
]
</script>

<style>
.home {
  padding: 20px;
}

.article-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.article-card h2 {
  margin: 0 0 10px 0;
}

.article-card p {
  margin: 0 0 10px 0;
}
</style>