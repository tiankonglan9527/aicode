<template>
  <div class="articles-page">
    <h1>文章列表</h1>
    <div class="filters">
      <select v-model="selectedCategory">
        <option value="">所有分类</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <input v-model="searchQuery" placeholder="搜索文章" />
    </div>
    <div class="articles">
      <div v-for="article in filteredArticles" :key="article.id" class="article-card">
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
  { id: 1, title: 'Vue3 新特性', summary: '介绍 Vue3 的新特性和使用方法。', category: '前端' },
  { id: 2, title: '响应式设计', summary: '如何实现响应式网页设计。', category: '前端' },
  { id: 3, title: '前端工程化', summary: '前端工程化的实践与思考。', category: '工程化' },
  { id: 4, title: 'Markdown 入门', summary: 'Markdown 的基本语法和使用场景。', category: '工具' }
]

const categories = ['前端', '工程化', '工具']
const selectedCategory = ref('')
const searchQuery = ref('')

const filteredArticles = computed(() => {
  return articles.filter(article => {
    const matchesCategory = !selectedCategory.value || article.category === selectedCategory.value
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<style>
.articles-page {
  padding: 20px;
}
.filters {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}
.articles {
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