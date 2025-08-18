<template>
  <div class="home">
    <h1>最新文章</h1>
    <div class="articles">
      <div v-for="article in latestArticles" :key="article.id" class="article-card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <router-link :to="`/article/${article.id}`">阅读更多</router-link>
      </div>
    </div>
    <h1>热门推荐</h1>
    <div class="articles">
      <div v-for="article in popularArticles" :key="article.id" class="article-card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <router-link :to="`/article/${article.id}`">阅读更多</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const latestArticles = [
  { id: 1, title: 'Vue3 新特性', summary: '介绍 Vue3 的新特性和使用方法。' },
  { id: 2, title: '响应式设计', summary: '如何实现响应式网页设计。' }
]

const popularArticles = [
  { id: 3, title: '前端工程化', summary: '前端工程化的实践与思考。' },
  { id: 4, title: 'Markdown 入门', summary: 'Markdown 的基本语法和使用场景。' }
]
</script>

<style>
.home {
  padding: 20px;
}
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}
.article-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}
.article-card h2 {
  margin-top: 0;
}
</style>