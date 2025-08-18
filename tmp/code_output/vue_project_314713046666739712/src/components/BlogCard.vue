<template>
  <div class="blog-card" @click="navigateToPost">
    <div class="image-container">
      <img :src="post.image" :alt="post.title" />
    </div>
    <div class="content">
      <h3>{{ post.title }}</h3>
      <p class="summary">{{ post.summary }}</p>
      <div class="meta">
        <span class="date">{{ formatDate(post.date) }}</span>
        <span class="category">{{ post.category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToPost = () => {
  router.push({ name: 'PostDetail', params: { id: props.post.id } })
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('zh-CN', options)
}
</script>

<style scoped>
.blog-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  background: #fff;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.image-container {
  height: 200px;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.blog-card:hover .image-container img {
  transform: scale(1.05);
}

.content {
  padding: 20px;
}

.content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
}

.summary {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta {
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 14px;
}

.date, .category {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .image-container {
    height: 150px;
  }
  
  .content {
    padding: 15px;
  }
  
  .content h3 {
    font-size: 18px;
  }
}
</style>