<template>
  <div class="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/categories">分类</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/about">关于我</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>