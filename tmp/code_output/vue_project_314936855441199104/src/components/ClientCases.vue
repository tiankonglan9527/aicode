<template>
  <div class="client-cases">
    <h2>客户案例</h2>
    <div class="cases">
      <div v-for="(caseItem, index) in cases" :key="index" class="case">
        <img :src="caseItem.image" :alt="caseItem.name" class="case-image" />
        <h3>{{ caseItem.name }}</h3>
        <p>{{ caseItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cases = [
  {
    name: 'A集团',
    description: '为A集团提供定制化解决方案，提升业务效率。',
    image: 'https://picsum.photos/300/200?random=4'
  },
  {
    name: 'B公司',
    description: '为B公司开发高性能智能设备，满足其业务需求。',
    image: 'https://picsum.photos/300/200?random=5'
  },
  {
    name: 'C机构',
    description: '为C机构提供云服务，确保数据安全可靠。',
    image: 'https://picsum.photos/300/200?random=6'
  }
]
</script>

<style scoped>
.client-cases {
  padding: 20px;
  text-align: center;
  background: #f9f9f9;
  margin: 20px 0;
}
.cases {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
.case {
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.case-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>