<template>
  <el-header class="navbar">
    <!-- 中心图标和标题 -->
    <div class="logo">
      <el-icon><i class="el-icon-eleme"></i></el-icon>
      <span>仪表板</span>
    </div>
    <!-- 水平导航菜单 -->
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">文档</el-menu-item>
      <el-menu-item index="3">关于</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #545c64;
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
}

.logo span {
  color: #ffd04b;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
}
</style>
