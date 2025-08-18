<template>
  <div class="article-card">
    <img :src="article.image" :alt="article.title" />
    <h2>{{ article.title }}</h2>
    <p>{{ article.summary }}</p>
    <router-link :to="`/article/${article.id}`">阅读更多</router-link>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style>
.article-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-card h2 {
  padding: 0.5rem 1rem;
  margin: 0;
}

.article-card p {
  padding: 0 1rem 1rem;
  margin: 0;
}

.article-card a {
  display: inline-block;
  margin: 0 1rem 1rem;
  color: #007bff;
  text-decoration: none;
}

.article-card a:hover {
  text-decoration: underline;
}
</style>