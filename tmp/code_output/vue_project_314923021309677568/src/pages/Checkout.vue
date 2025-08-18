<template>
  <div class="checkout">
    <h1>结算</h1>
    <div class="checkout-summary">
      <h2>订单总价: {{ totalPrice }}元</h2>
      <div class="coupon">
        <input type="text" placeholder="输入优惠码" v-model="couponCode" />
        <button @click="applyCoupon">使用优惠券</button>
      </div>
      <p v-if="discount > 0">优惠: -{{ discount }}元</p>
      <h3>实付金额: {{ finalPrice }}元</h3>
    </div>
    <div class="payment-methods">
      <h2>选择支付方式</h2>
      <div class="payment-method" v-for="method in paymentMethods" :key="method.id">
        <input type="radio" :id="method.id" :value="method.id" v-model="selectedMethod" />
        <label :for="method.id">{{ method.name }}</label>
      </div>
    </div>
    <button class="pay-button" @click="handlePayment">立即支付</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const totalPrice = ref(500)
const couponCode = ref('')
const discount = ref(0)
const selectedMethod = ref('alipay')
const router = useRouter()

const paymentMethods = ref([
  { id: 'alipay', name: '支付宝' },
  { id: 'wechat', name: '微信支付' },
  { id: 'bank', name: '银行卡' },
])

const finalPrice = computed(() => {
  return totalPrice.value - discount.value
})

const applyCoupon = () => {
  if (couponCode.value === 'DISCOUNT10') {
    discount.value = 50
  } else {
    discount.value = 0
    alert('无效的优惠券')
  }
}

const handlePayment = () => {
  console.log('支付方式:', selectedMethod.value)
  router.push('/orders')
}
</script>

<style scoped>
.checkout {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
.checkout-summary {
  margin-bottom: 20px;
}
.coupon {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}
.payment-methods {
  margin-bottom: 20px;
}
.payment-method {
  margin-bottom: 10px;
}
.pay-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>