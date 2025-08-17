<template>
  <div class="app">
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/tasks">任务列表</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>