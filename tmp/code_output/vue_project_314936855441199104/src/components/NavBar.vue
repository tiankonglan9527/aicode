<template>
  <nav class="navbar">
    <div class="logo">企业官网</div>
    <div class="nav-links">
      <router-link to="/">首页</router-link>
      <router-link to="/products">产品中心</router-link>
      <router-link to="/news">新闻动态</router-link>
      <router-link to="/contact">联系我们</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #333;
  color: white;
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 20px;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.nav-links a:hover {
  text-decoration: underline;
}
</style>