<template>
  <nav class="navbar">
    <router-link to="/" class="logo">个人博客</router-link>
    <div class="links">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
}

.links a {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}

.links a:hover {
  color: #007bff;
}
</style>