<template>
  <div class="carousel">
    <img :src="currentImage" alt="轮播图" class="carousel-image" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const images = [
  'https://picsum.photos/1200/400?random=7',
  'https://picsum.photos/1200/400?random=8',
  'https://picsum.photos/1200/400?random=9'
]

const currentImage = ref(images[0])

onMounted(() => {
  let index = 0
  setInterval(() => {
    index = (index + 1) % images.length
    currentImage.value = images[index]
  }, 3000)
})
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>