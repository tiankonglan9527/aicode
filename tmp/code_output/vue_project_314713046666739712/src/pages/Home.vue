<template>
  <div class="home">
    <div class="hero">
      <h1>欢迎来到我的技术博客</h1>
      <p>探索前端开发的最新趋势和技术实践</p>
    </div>
    
    <div class="featured-post" v-if="featuredPost">
      <h2>精选文章</h2>
      <div class="featured-content" @click="goToPost(featuredPost.id)">
        <img :src="featuredPost.image" :alt="featuredPost.title" />
        <div class="featured-text">
          <h3>{{ featuredPost.title }}</h3>
          <p>{{ featuredPost.summary }}</p>
          <div class="meta">
            <span>{{ formatDate(featuredPost.date) }}</span>
            <span>{{ featuredPost.category }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="posts-section">
      <h2>最新文章</h2>
      <div class="posts-grid">
        <BlogCard 
          v-for="post in latestPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>
    </div>
    
    <div class="categories">
      <h2>文章分类</h2>
      <div class="categories-list">
        <div 
          v-for="category in uniqueCategories" 
          :key="category" 
          class="category-item"
          @click="filterByCategory(category)"
        >
          {{ category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { blogPosts } from '@/utils/mockData'
import BlogCard from '@/components/BlogCard.vue'

const router = useRouter()

const posts = ref(blogPosts)

// 精选文章（最新的一篇）
const featuredPost = computed(() => {
  return posts.value.length > 0 
    ? [...posts.value].sort((a, b) => new Date(b.date) - new Date(a.date))[0] 
    : null
})

// 最新文章（排除精选文章）
const latestPosts = computed(() => {
  return posts.value
    .filter(post => post.id !== featuredPost.value?.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4)
})

// 唯一分类
const uniqueCategories = computed(() => {
  const categories = new Set()
  posts.value.forEach(post => categories.add(post.category))
  return Array.from(categories)
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('zh-CN', options)
}

const goToPost = (postId) => {
  router.push({ name: 'PostDetail', params: { id: postId } })
}

const filterByCategory = (category) => {
  // 在实际应用中，这里可以实现按分类过滤文章的功能
  alert(`已选择分类: ${category}`)
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.featured-post {
  margin-bottom: 50px;
}

.featured-post h2,
.posts-section h2,
.categories h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #42b983;
}

.featured-content {
  display: flex;
  gap: 30px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s;
}

.featured-content:hover {
  transform: translateY(-5px);
}

.featured-content img {
  width: 50%;
  height: 300px;
  object-fit: cover;
}

.featured-text {
  padding: 30px 20px 30px 0;
  flex: 1;
}

.featured-text h3 {
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 15px;
}

.featured-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
}

.meta {
  display: flex;
  gap: 20px;
  color: #888;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
}

.categories-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
}

.category-item {
  background: #f0f9eb;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-item:hover {
  background: #42b983;
  color: white;
}

@media (max-width: 992px) {
  .posts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .featured-content {
    flex-direction: column;
  }
  
  .featured-content img {
    width: 100%;
    height: 200px;
  }
  
  .featured-text {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 15px;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>