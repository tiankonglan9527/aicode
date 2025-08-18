<template>
  <div class="home-page">
    <NavBar />
    <Carousel />
    <CompanyIntro />
    <ProductShowcase />
    <ClientCases />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import CompanyIntro from '@/components/CompanyIntro.vue'
import ProductShowcase from '@/components/ProductShowcase.vue'
import ClientCases from '@/components/ClientCases.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>