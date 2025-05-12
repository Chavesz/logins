<template>
  <div class="auth-page">
    <h2>Cadastro</h2>
    <form @submit.prevent="submit">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Senha</label>
        <input v-model="password" type="password" minlength="6" required />
      </div>
      <button type="submit">Registrar</button>
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
        await axios.post('http://localhost:3000/api/register', {
          email: this.email,
          password: this.password
        });
        this.$router.push('/login');
      } catch (e) {
        this.error = e.response?.data?.error || 'Erro no cadastro';
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
