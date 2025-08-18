<template>
  <div class="categories">
    <h1>分类</h1>
    <div v-for="category in categories" :key="category.id" class="category">
      <h2>{{ category.name }}</h2>
      <div v-for="article in category.articles" :key="article.id" class="article">
        <router-link :to="`/article/${article.id}">{{ article.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  {
    id: 1,
    name: '前端开发',
    articles: [
      { id: 1, title: 'Vue3 新特性解析' },
      { id: 2, title: '前端工程化实践' }
    ]
  },
  {
    id: 2,
    name: '设计',
    articles: [
      { id: 3, title: '响应式设计指南' },
      { id: 4, title: 'Markdown 语法大全' }
    ]
  }
]
</script>

<style>
.categories {
  padding: 20px;
}

.category {
  margin-bottom: 20px;
}

.article {
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>