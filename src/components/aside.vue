<template>
  <el-menu
    :style="{width:!isCollapse? '230px' :'64px'}"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="aside-container"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse='isCollapse'
  >
    <p class="logo-lg">{{ !isCollapse? 'DIDI陪诊':'DIDI' }}</p>
    <TreeMenu
      :menuData="menuData"
      :index="1"
    />
  </el-menu>
</template>

<script setup>
import TreeMenu from "./treemenu.vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { useMenuStore } from "../store/menu.ts";
import { storeToRefs } from "pinia";

const router = useRouter();
const menustore = useMenuStore();
const { isCollapse } = storeToRefs(menustore);

let menuData = reactive(router.options.routes[0].children);

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style lang="less" scoped>
.aside-container {
  height: 100%;
  .logo-lg {
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
  }
}
</style>