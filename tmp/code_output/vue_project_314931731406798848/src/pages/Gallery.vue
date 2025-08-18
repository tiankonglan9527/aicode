<template>
  <div class="gallery">
    <h1>作品画廊</h1>
    <div class="filters">
      <button v-for="category in categories" :key="category" @click="filterByCategory(category)">
        {{ category }}
      </button>
    </div>
    <div class="gallery-grid">
      <div v-for="item in filteredItems" :key="item.id" class="gallery-item" @click="openModal(item)">
        <img :src="item.image" :alt="item.title" />
      </div>
    </div>
    <div v-if="selectedItem" class="modal" @click="closeModal">
      <div class="modal-content">
        <img :src="selectedItem.image" :alt="selectedItem.title" />
        <h2>{{ selectedItem.title }}</h2>
        <p>{{ selectedItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = [
  { id: 1, title: '自然风光', image: 'https://picsum.photos/400/300?random=1', category: '自然', description: '美丽的自然风光摄影作品。' },
  { id: 2, title: '城市建筑', image: 'https://picsum.photos/400/300?random=2', category: '城市', description: '现代城市建筑摄影作品。' },
  { id: 3, title: '人像摄影', image: 'https://picsum.photos/400/300?random=3', category: '人像', description: '生动的人像摄影作品。' },
  { id: 4, title: '抽象艺术', image: 'https://picsum.photos/400/300?random=4', category: '艺术', description: '抽象艺术创作。' },
  { id: 5, title: '静物摄影', image: 'https://picsum.photos/400/300?random=5', category: '静物', description: '精美的静物摄影作品。' }
]

const categories = ['全部', '自然', '城市', '人像', '艺术', '静物']
const selectedCategory = ref('全部')
const selectedItem = ref(null)

const filteredItems = computed(() => {
  if (selectedCategory.value === '全部') return items
  return items.filter(item => item.category === selectedCategory.value)
})

const filterByCategory = (category) => {
  selectedCategory.value = category
}

const openModal = (item) => {
  selectedItem.value = item
}

const closeModal = () => {
  selectedItem.value = null
}
</script>

<style>
.gallery {
  padding: 20px;
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.filters button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.filters button:hover {
  background: #f0f0f0;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}
.gallery-item {
  cursor: pointer;
}
.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}
.modal-content img {
  max-width: 100%;
  max-height: 400px;
}
</style>