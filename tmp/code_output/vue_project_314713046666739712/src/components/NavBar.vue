<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">我的博客</router-link>
    </div>
    <div class="nav-links">
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <div class="mobile-menu" @click="toggleMenu">
      <div class="menu-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="mobile-nav" :class="{ 'active': isMenuOpen }">
      <router-link to="/" @click="closeMenu">首页</router-link>
      <router-link to="/about" @click="closeMenu">关于</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo a {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #42b983;
}

.mobile-menu {
  display: none;
  cursor: pointer;
}

.menu-icon div {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
}

.mobile-nav {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.mobile-nav a {
  padding: 10px 0;
  text-decoration: none;
  color: #555;
  border-bottom: 1px solid #eee;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .mobile-nav.active {
    display: flex;
  }
}
</style>