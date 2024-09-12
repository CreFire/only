import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 使用哈希模式的路由历史
  routes
})

export default router
