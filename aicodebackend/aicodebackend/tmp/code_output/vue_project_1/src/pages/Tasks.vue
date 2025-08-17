<template>
  <div class="tasks">
    <h1>任务列表</h1>
    <div class="task-form">
      <input v-model="newTask" placeholder="输入新任务" />
      <button @click="addTask">添加</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  { text: '学习 Vue 3', completed: false },
  { text: '完成项目', completed: false },
  { text: '阅读文档', completed: false }
])

const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, completed: false })
    newTask.value = ''
  }
}
</script>

<style>
.tasks {
  max-width: 600px;
  margin: 0 auto;
}

.task-form {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>