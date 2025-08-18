<template>
  <div class="works">
    <h1>作品展示</h1>
    <div class="categories">
      <button v-for="category in categories" :key="category" @click="filterWorks(category)">
        {{ category }}
      </button>
    </div>
    <div class="works-grid">
      <div class="work-card" v-for="work in filteredWorks" :key="work.id">
        <img :src="work.image" :alt="work.title" />
        <h3>{{ work.title }}</h3>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categories = ['全部', '自然', '建筑', '艺术']
const selectedCategory = ref('全部')

const works = [
  { id: 1, title: "自然风光", description: "美丽的自然风光摄影作品", category: "自然", image: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "城市建筑", description: "现代城市建筑的艺术表现", category: "建筑", image: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "抽象艺术", description: "充满想象力的抽象艺术作品", category: "艺术", image: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "森林探险", description: "神秘的森林探险记录", category: "自然", image: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "现代雕塑", description: "现代雕塑艺术的杰作", category: "艺术", image: "https://picsum.photos/300/200?random=5" },
  { id: 6, title: "古老城堡", description: "历史悠久的古老城堡", category: "建筑", image: "https://picsum.photos/300/200?random=6" }
]

const filteredWorks = ref(works)

const filterWorks = (category) => {
  selectedCategory.value = category
  if (category === '全部') {
    filteredWorks.value = works
  } else {
    filteredWorks.value = works.filter(work => work.category === category)
  }
}
</script>

<style>
.works {
  text-align: center;
}

.categories {
  margin: 20px 0;
}

.categories button {
  margin: 0 10px;
  padding: 5px 10px;
  cursor: pointer;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.work-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.work-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>