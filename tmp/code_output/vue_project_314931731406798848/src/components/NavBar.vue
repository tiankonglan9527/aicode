<template>
  <nav class="navbar">
    <router-link to="/">主页</router-link>
    <router-link to="/gallery">作品画廊</router-link>
    <router-link to="/resume">个人简历</router-link>
    <router-link to="/contact">联系方式</router-link>
  </nav>
</template>

<script setup>
</script>

<style>
.navbar {
  display: flex;
  gap: 20px;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.navbar a {
  text-decoration: none;
  color: #333;
}
.navbar a:hover {
  color: #007bff;
}
</style>