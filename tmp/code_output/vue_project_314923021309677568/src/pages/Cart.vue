<template>
  <div class="cart">
    <h1>购物车</h1>
    <div class="cart-items">
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="item.image" :alt="item.name" />
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }}元</p>
          <div class="quantity">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <button @click="removeFromCart(item)">删除</button>
        </div>
      </div>
    </div>
    <div class="cart-summary">
      <h2>总计: {{ totalPrice }}元</h2>
      <button @click="checkout">结算</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cartItems = ref([
  { id: 1, name: '商品1', price: 100, image: 'https://picsum.photos/200/300', quantity: 1 },
  { id: 2, name: '商品2', price: 200, image: 'https://picsum.photos/200/300', quantity: 2 },
])

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

const increaseQuantity = (item) => {
  item.quantity++
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) item.quantity--
  else removeFromCart(item)
}

const removeFromCart = (item) => {
  cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id)
}

const checkout = () => {
  console.log('结算:', cartItems.value)
}
</script>

<style scoped>
.cart {
  padding: 20px;
}
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cart-item {
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}
.cart-item img {
  width: 100px;
  height: auto;
}
.item-info {
  flex-grow: 1;
}
.quantity {
  display: flex;
  gap: 10px;
  align-items: center;
}
.cart-summary {
  margin-top: 20px;
  text-align: right;
}
</style>