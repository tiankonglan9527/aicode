<template>
  <div class="home">
    <h1>欢迎来到精美作品展示网站</h1>
    <p>这里展示了一些精选的作品，希望您能喜欢。</p>
    <div class="featured-works">
      <h2>精选作品</h2>
      <div class="works-grid">
        <div class="work-card" v-for="work in featuredWorks" :key="work.id">
          <img :src="work.image" :alt="work.title" />
          <h3>{{ work.title }}</h3>
          <p>{{ work.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const featuredWorks = [
  {
    id: 1,
    title: "自然风光",
    description: "美丽的自然风光摄影作品",
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    id: 2,
    title: "城市建筑",
    description: "现代城市建筑的艺术表现",
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    id: 3,
    title: "抽象艺术",
    description: "充满想象力的抽象艺术作品",
    image: "https://picsum.photos/300/200?random=3"
  }
]
</script>

<style>
.home {
  text-align: center;
}

.featured-works {
  margin-top: 30px;
}

.featured-works h2 {
  color: #6a5acd;
  font-size: 24px;
  margin-bottom: 20px;
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