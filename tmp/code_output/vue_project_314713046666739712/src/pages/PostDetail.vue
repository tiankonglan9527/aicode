<template>
  <div class="post-detail" v-if="post">
    <div class="banner">
      <img :src="post.image" :alt="post.title" />
    </div>
    
    <div class="container">
      <div class="header">
        <h1>{{ post.title }}</h1>
        <div class="meta">
          <span class="date">{{ formatDate(post.date) }}</span>
          <span class="category">{{ post.category }}</span>
        </div>
      </div>
      
      <div class="content" v-html="post.content"></div>
      
      <div class="navigation">
        <button 
          v-if="previousPost" 
          @click="goToPost(previousPost.id)"
          class="nav-button prev"
        >
          上一篇: {{ previousPost.title }}
        </button>
        <button 
          v-if="nextPost" 
          @click="goToPost(nextPost.id)"
          class="nav-button next"
        >
          下一篇: {{ nextPost.title }}
        </button>
      </div>
    </div>
  </div>
  
  <div v-else class="loading">
    文章加载中...
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { blogPosts } from '@/utils/mockData'

const route = useRoute()
const router = useRouter()

const postId = computed(() => parseInt(route.params.id))
const post = ref(null)

const loadPost = () => {
  post.value = blogPosts.find(p => p.id === postId.value) || null
}

// 监听路由变化
watch(() => route.params.id, loadPost, { immediate: true })

// 上一篇
const previousPost = computed(() => {
  const index = blogPosts.findIndex(p => p.id === postId.value)
  return index > 0 ? blogPosts[index - 1] : null
})

// 下一篇
const nextPost = computed(() => {
  const index = blogPosts.findIndex(p => p.id === postId.value)
  return index < blogPosts.length - 1 ? blogPosts[index + 1] : null
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('zh-CN', options)
}

const goToPost = (id) => {
  router.push({ name: 'PostDetail', params: { id } })
}
</script>

<style scoped>
.post-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.banner img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 40px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #777;
  font-size: 0.95rem;
}

.content {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 60px;
}

.content :deep(p) {
  margin-bottom: 20px;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.nav-button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  max-width: 45%;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.nav-button:hover {
  color: #42b983;
}

.prev {
  text-align: left;
}

.next {
  text-align: right;
  margin-left: auto;
}

.loading {
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .banner img {
    height: 250px;
  }
  
  .header h1 {
    font-size: 1.8rem;
  }
  
  .content {
    font-size: 1rem;
  }
  
  .navigation {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-button {
    max-width: 100%;
  }
}
</style>