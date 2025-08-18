<template>
  <div class="article">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" :alt="article.title" />
    <p>{{ article.content }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const article = ref({})

onMounted(() => {
  const articles = [
    { id: 1, title: 'Vue3 组合式 API 入门', content: '这里是关于 Vue3 组合式 API 的详细内容...', image: 'https://picsum.photos/600/400?random=1' },
    { id: 2, title: '前端工程化实践', content: '这里是关于前端工程化的详细内容...', image: 'https://picsum.photos/600/400?random=2' },
    { id: 3, title: '响应式设计技巧', content: '这里是关于响应式设计的详细内容...', image: 'https://picsum.photos/600/400?random=3' }
  ]
  article.value = articles.find(a => a.id === parseInt(route.params.id))
})
</script>

<style>
.article {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.article img {
  width: 100%;
  height: auto;
  margin: 1rem 0;
}
</style>