<template>
  <div class="search">
    <h1>搜索</h1>
    <input v-model="query" placeholder="输入关键词" />
    <button @click="search">搜索</button>
    <div v-if="results.length">
      <div v-for="article in results" :key="article.id" class="result">
        <router-link :to="`/article/${article.id}">{{ article.title }}</router-link>
      </div>
    </div>
    <div v-else>
      <p>暂无结果</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const articles = [
  { id: 1, title: 'Vue3 新特性解析' },
  { id: 2, title: '前端工程化实践' },
  { id: 3, title: '响应式设计指南' },
  { id: 4, title: 'Markdown 语法大全' }
]

const query = ref('')
const results = ref([])

const search = () => {
  if (query.value.trim()) {
    results.value = articles.filter(article =>
      article.title.toLowerCase().includes(query.value.toLowerCase())
    )
  } else {
    results.value = []
  }
}
</script>

<style>
.search {
  padding: 20px;
}

input {
  padding: 8px;
  margin-right: 10px;
}

.result {
  margin-top: 10px;
}
</style>