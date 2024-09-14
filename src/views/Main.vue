<template>
  <div class="common-layout">
    <el-container class="common-layout">
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <Aside />
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from "../components/navHeader.vue";
import Aside from "../components/aside.vue";
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
}
</style>