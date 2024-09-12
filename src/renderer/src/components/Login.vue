<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="用户名" required />
      <input v-model="password" type="password" placeholder="密码" required />
      <button type="submit">登录</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const errorMessage = ref('')

    const handleLogin = () => {
      if (username.value === 'admin' && password.value === '123') {
        alert('登录成功')
        router.push('/dashboard') // 跳转到仪表板页面
      } else {
        errorMessage.value = '用户名或密码错误'
      }
    }

    return {
      username,
      password,
      errorMessage,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
