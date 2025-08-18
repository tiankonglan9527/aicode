<template>
  <div class="contact-page">
    <NavBar />
    <div class="content">
      <h1>联系我们</h1>
      <div class="contact-info">
        <p>电话: 123-456-7890</p>
        <p>邮箱: contact@example.com</p>
        <p>地址: 北京市海淀区科技园路1号</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  padding: 20px;
}
.contact-info {
  margin-top: 20px;
}
</style>