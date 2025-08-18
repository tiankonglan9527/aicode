<template>
  <div class="product-showcase">
    <h2>产品展示</h2>
    <div class="products">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: '智能设备',
    description: '高性能智能设备，满足您的日常需求。',
    image: 'https://picsum.photos/300/200?random=1'
  },
  {
    name: '软件解决方案',
    description: '定制化软件解决方案，助力企业数字化转型。',
    image: 'https://picsum.photos/300/200?random=2'
  },
  {
    name: '云服务',
    description: '安全可靠的云服务，随时随地访问您的数据。',
    image: 'https://picsum.photos/300/200?random=3'
  }
]
</script>

<style scoped>
.product-showcase {
  padding: 20px;
  text-align: center;
}
.products {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}
.product {
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>