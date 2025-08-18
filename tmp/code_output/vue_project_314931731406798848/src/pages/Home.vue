<template>
  <div class="home">
    <h1>欢迎来到我的创作空间</h1>
    <p>这里展示了我最新的作品和项目，欢迎探索！</p>
    <div class="featured-projects">
      <h2>精选作品</h2>
      <div class="projects-grid">
        <div v-for="project in featuredProjects" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const featuredProjects = [
  { id: 1, title: '自然风光', image: 'https://picsum.photos/300/200?random=1' },
  { id: 2, title: '城市建筑', image: 'https://picsum.photos/300/200?random=2' },
  { id: 3, title: '人像摄影', image: 'https://picsum.photos/300/200?random=3' }
]
</script>

<style>
.home {
  text-align: center;
}
.featured-projects {
  margin-top: 30px;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.project-card {
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
}
.project-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>