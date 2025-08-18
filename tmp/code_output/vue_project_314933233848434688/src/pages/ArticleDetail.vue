<template>
  <div class="article-detail">
    <h1>{{ article.title }}</h1>
    <div v-html="article.content"></div>
    <div class="comments">
      <h2>评论</h2>
      <div v-for="comment in article.comments" :key="comment.id" class="comment">
        <p><strong>{{ comment.author }}</strong>: {{ comment.content }}</p>
      </div>
      <form @submit.prevent="addComment">
        <input v-model="newComment.author" placeholder="你的名字" required />
        <textarea v-model="newComment.content" placeholder="你的评论" required></textarea>
        <button type="submit">提交评论</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const route = useRoute()
const articleId = parseInt(route.params.id)

const articles = [
  {
    id: 1,
    title: 'Vue3 新特性',
    content: marked('### Vue3 新特性\n\nVue3 引入了 Composition API，提供了更好的代码组织和复用性。'),
    comments: []
  },
  {
    id: 2,
    title: '响应式设计',
    content: marked('### 响应式设计\n\n响应式设计是现代网页开发的基础，确保网站在不同设备上都能良好显示。'),
    comments: []
  },
  {
    id: 3,
    title: '前端工程化',
    content: marked('### 前端工程化\n\n前端工程化可以提高开发效率和代码质量。'),
    comments: []
  },
  {
    id: 4,
    title: 'Markdown 入门',
    content: marked('### Markdown 入门\n\nMarkdown 是一种轻量级标记语言，适合写作和技术文档。'),
    comments: []
  }
]

const article = articles.find(article => article.id === articleId)
const newComment = ref({ author: '', content: '' })

const addComment = () => {
  article.comments.push({
    id: Date.now(),
    author: newComment.value.author,
    content: newComment.value.content
  })
  newComment.value = { author: '', content: '' }
}
</script>

<style>
.article-detail {
  padding: 20px;
}
.comments {
  margin-top: 40px;
}
.comment {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
form {
  margin-top: 20px;
}
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  padding: 8px 16px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>