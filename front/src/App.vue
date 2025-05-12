<template>
  <div id="app">
    <button @click="isLogin = true">Login</button>
    <button @click="isLogin = false">Register</button>
    <LoginR v-if="isLogin" />
    <RegisterL v-else />
  </div>
</template>

<script>
import LoginR from './views/LoginR.vue'
import RegisterL from './views/RegisterL.vue'

export default {
  name: 'App',
  components: {
    LoginR,
    RegisterL
  },
  data() {
    return {
      isLogin: true
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
