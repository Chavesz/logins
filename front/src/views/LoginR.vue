<template>
  <div class="auth-page">
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Senha</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async submit() {
      this.error = '';
      try {
        const { data } = await axios.post('http://localhost:3000/api/login', {
          email: this.email,
          password: this.password
        });
        // Guarde o token para chamadas futuras
        localStorage.setItem('token', data.token);
        alert('Login realizado com sucesso');
      } catch (e) {
        this.error = e.response?.data?.error || 'Erro no login';
      }
    }
  }
};
</script>

<style scoped>
.auth-page { max-width: 400px; margin: 2rem auto; }
.auth-page div { margin-bottom: 1rem; }
.error { color: red; }
</style>
