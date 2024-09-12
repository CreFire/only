<template>
  <el-container class="dashboard">
    <!-- 主体布局 -->
    <el-container>
      <!-- 导航栏组件 -->
      <Navbar />
      <!-- 左侧导航栏 -->
      <el-aside width="200px" class="aside">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <i class="el-icon-document"></i>
              <span>权限页面</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">用户管理</el-menu-item>
              <el-menu-item index="2-2">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <!-- 主内容区域 -->
      <el-main style="margin-top: 3%">
        <div class="content">
          <!-- 内容区域，例如图表和其他组件 -->
          <el-card v-for="item in 4" :key="item" class="box-card" :style="{ margin: '20px' }">
            <template #header>
              <div class="clearfix">
                <span>图表 {{ item }}</span>
              </div>
            </template>
            <div>
              <p>这是图表的内容区域...</p>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.aside {
  background-color: #545c64;
  height: calc(100vh - 60px); /* 调整侧边栏的高度，避免覆盖顶部导航栏 */
  margin-top: 60px; /* 防止内容被固定的导航栏遮挡 */
}
.content {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
