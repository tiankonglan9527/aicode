<template>
  <div class="app">
    <nav class="navbar">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于我</router-link>
      <router-link to="/articles">文章列表</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.navbar {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.navbar a {
  text-decoration: none;
  color: #333;
}
.navbar a:hover {
  color: #007BFF;
}
</style>