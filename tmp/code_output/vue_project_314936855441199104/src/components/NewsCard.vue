<template>
  <div class="news-card">
    <h3>{{ item.title }}</h3>
    <p class="date">{{ item.date }}</p>
    <p>{{ item.summary }}</p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.news-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
}
.date {
  color: #666;
  font-size: 0.9rem;
}
</style>