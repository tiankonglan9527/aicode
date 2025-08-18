<template>
  <div id="app">
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/works">作品展示</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view />
    <footer>
      <p>© 2023 精美作品展示网站</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
}

footer {
  margin-top: 50px;
  text-align: center;
  color: #666;
}
</style>