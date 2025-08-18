<template>
  <div class="article-detail">
    <h1>{{ article.title }}</h1>
    <div v-html="article.content"></div>
    <div class="comments">
      <h2>评论</h2>
      <div v-for="comment in article.comments" :key="comment.id" class="comment">
        <p>{{ comment.text }}</p>
        <small>{{ comment.author }}</small>
      </div>
      <form @submit.prevent="addComment">
        <input v-model="newComment" placeholder="添加评论" required />
        <button type="submit">提交</button>
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
    title: 'Vue3 新特性解析',
    content: marked('## Vue3 新特性\n\n- Composition API\n- 更好的性能\n- 更小的体积'),
    comments: [
      { id: 1, text: '非常详细！', author: '用户A' },
      { id: 2, text: '学到了很多！', author: '用户B' }
    ]
  },
  {
    id: 2,
    title: '前端工程化实践',
    content: marked('## 前端工程化\n\n- 模块化\n- 自动化构建\n- 代码规范'),
    comments: []
  },
  {
    id: 3,
    title: '响应式设计指南',
    content: marked('## 响应式设计\n\n- 媒体查询\n- 弹性布局\n- 视口单位'),
    comments: []
  },
  {
    id: 4,
    title: 'Markdown 语法大全',
    content: marked('## Markdown 语法\n\n- 标题\n- 列表\n- 代码块'),
    comments: []
  }
]

const article = articles.find(a => a.id === articleId)
const newComment = ref('')

const addComment = () => {
  if (newComment.value.trim()) {
    article.comments.push({
      id: Date.now(),
      text: newComment.value,
      author: '匿名用户'
    })
    newComment.value = ''
  }
}
</script>

<style>
.article-detail {
  padding: 20px;
}

.comments {
  margin-top: 20px;
}

.comment {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #eee;
}

form {
  margin-top: 20px;
}

input {
  padding: 8px;
  margin-right: 10px;
}
</style>