<template>
  <div class="app-container">
    <NavBar />
    <div class="content">
      <router-view />
    </div>
    <footer class="footer">
      <p>© 2023 我的个人博客 | 保留所有权利</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #eaeaea;
}

@media (max-width: 768px) {
  .content {
    padding: 10px;
  }
}
</style>