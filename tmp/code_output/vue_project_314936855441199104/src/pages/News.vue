<template>
  <div class="news-page">
    <NavBar />
    <div class="content">
      <h1>新闻动态</h1>
      <div class="news-list">
        <NewsCard v-for="(item, index) in news" :key="index" :item="item" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import NewsCard from '@/components/NewsCard.vue'
import Footer from '@/components/Footer.vue'

const news = [
  {
    title: '公司荣获2023年度技术创新奖',
    date: '2023-10-15',
    summary: '我们很高兴地宣布，公司在2023年度技术创新评选中荣获大奖。'
  },
  {
    title: '新产品发布会圆满结束',
    date: '2023-09-20',
    summary: '我们的新产品发布会吸引了众多客户和合作伙伴，取得了圆满成功。'
  },
  {
    title: '公司与A集团达成战略合作',
    date: '2023-08-10',
    summary: '我们与A集团达成战略合作协议，共同推动行业发展。'
  }
]
</script>

<style scoped>
.news-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  padding: 20px;
}
.news-list {
  margin-top: 20px;
}
</style>