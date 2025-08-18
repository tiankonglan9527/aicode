<template>
  <div class="search-page">
    <h1>搜索文章</h1>
    <input v-model="query" placeholder="输入关键词" />
    <div class="results">
      <div v-for="article in searchResults" :key="article.id" class="article-card">
        <h2>{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <router-link :to="`/article/${article.id}`">阅读更多</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const articles = [
  { id: 1, title: 'Vue3 新特性', summary: '介绍 Vue3 的新特性和使用方法。' },
  { id: 2, title: '响应式设计', summary: '如何实现响应式网页设计。' },
  { id: 3, title: '前端工程化', summary: '前端工程化的实践与思考。' },
  { id: 4, title: 'Markdown 入门', summary: 'Markdown 的基本语法和使用场景。' }
]

const query = ref('')

const searchResults = computed(() => {
  if (!query.value) return []
  return articles.filter(article => {
    return article.title.toLowerCase().includes(query.value.toLowerCase()) ||
           article.summary.toLowerCase().includes(query.value.toLowerCase())
  })
})
</script>

<style>
.search-page {
  padding: 20px;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}
.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
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