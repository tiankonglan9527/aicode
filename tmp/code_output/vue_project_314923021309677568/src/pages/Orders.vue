<template>
  <div class="orders">
    <h1>我的订单</h1>
    <div class="order-list">
      <div class="order" v-for="order in orders" :key="order.id">
        <h3>订单号: {{ order.id }}</h3>
        <p>状态: {{ order.status }}</p>
        <p>总价: {{ order.total }}元</p>
        <div class="order-items">
          <div class="order-item" v-for="item in order.items" :key="item.id">
            <img :src="item.image" :alt="item.name" />
            <div class="item-info">
              <p>{{ item.name }}</p>
              <p>{{ item.price }}元 x {{ item.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const orders = ref([
  {
    id: 'ORD-001',
    status: '已发货',
    total: 500,
    items: [
      { id: 1, name: '商品1', price: 100, image: 'https://picsum.photos/200/300', quantity: 2 },
      { id: 2, name: '商品2', price: 200, image: 'https://picsum.photos/200/300', quantity: 1 },
    ],
  },
  {
    id: 'ORD-002',
    status: '待付款',
    total: 300,
    items: [
      { id: 3, name: '商品3', price: 300, image: 'https://picsum.photos/200/300', quantity: 1 },
    ],
  },
])
</script>

<style scoped>
.orders {
  padding: 20px;
}
.order {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.order-items {
  margin-top: 10px;
}
.order-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.order-item img {
  width: 50px;
  height: auto;
}
</style>