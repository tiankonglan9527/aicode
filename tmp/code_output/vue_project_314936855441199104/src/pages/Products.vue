<template>
  <div class="products-page">
    <NavBar />
    <div class="content">
      <h1>产品中心</h1>
      <ProductShowcase />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import ProductShowcase from '@/components/ProductShowcase.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.products-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  padding: 20px;
}
</style>