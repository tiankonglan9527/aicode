<template>
  <div class="product-detail">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="price">{{ product.price }}元</p>
      <p class="description">{{ product.description }}</p>
      <button @click="addToCart(product)">加入购物车</button>
    </div>
    <div class="reviews">
      <h2>用户评价</h2>
      <div class="review" v-for="review in product.reviews" :key="review.id">
        <p>{{ review.user }}: {{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = parseInt(route.params.id)

const products = ref([
  {
    id: 1,
    name: '商品1',
    price: 100,
    image: 'https://picsum.photos/200/300',
    description: '这是商品1的详细描述。',
    reviews: [
      { id: 1, user: '用户1', comment: '很好用！' },
      { id: 2, user: '用户2', comment: '性价比高！' },
    ],
  },
  {
    id: 2,
    name: '商品2',
    price: 200,
    image: 'https://picsum.photos/200/300',
    description: '这是商品2的详细描述。',
    reviews: [
      { id: 3, user: '用户3', comment: '非常满意！' },
    ],
  },
  {
    id: 3,
    name: '商品3',
    price: 300,
    image: 'https://picsum.photos/200/300',
    description: '这是商品3的详细描述。',
    reviews: [],
  },
])

const product = ref(products.value.find(p => p.id === productId))

const addToCart = (product) => {
  console.log('加入购物车:', product)
}
</script>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.product-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.price {
  font-size: 1.5em;
  color: #e63946;
}
.reviews {
  margin-top: 20px;
}
.review {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f1faee;
  border-radius: 5px;
}
</style>