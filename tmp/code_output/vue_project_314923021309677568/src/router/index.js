import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import Cart from '../pages/Cart.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Orders from '../pages/Orders.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/orders', component: Orders },
  { path: '/checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router