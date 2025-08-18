<template>
  <div class="home">
    <header>
      <h1>欢迎来到在线商城</h1>
      <div class="search-bar">
        <input type="text" placeholder="搜索商品" v-model="searchQuery" />
        <button @click="searchProducts">搜索</button>
      </div>
    </header>
    <div class="product-list">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}元</p>
        <button @click="addToCart(product)">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const products = ref([
  { id: 1, name: '商品1', price: 100, image: 'https://picsum.photos/200/300' },
  { id: 2, name: '商品2', price: 200, image: 'https://picsum.photos/200/300' },
  { id: 3, name: '商品3', price: 300, image: 'https://picsum.photos/200/300' },
])

const searchQuery = ref('')

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const addToCart = (product) => {
  console.log('加入购物车:', product)
}

const searchProducts = () => {
  console.log('搜索:', searchQuery.value)
}
</script>

<style scoped>
.home {
  padding: 20px;
}
header {
  margin-bottom: 20px;
}
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
.product-card img {
  width: 100%;
  height: auto;
}
</style>