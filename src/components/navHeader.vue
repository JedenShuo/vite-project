<template >
  <div class="header-container flex-box">
    <div class="header-left flex-box">
      <el-icon
        class="icon"
        size="20"
        @click="putAway"
      >
        <Fold />
      </el-icon>
      <ul class="flex-box tab">
        <li
          v-for="(item,index) in selectMenu"
          :key="item.path"
          class="flex-box tab topline"
          :class='{selected:route.path === item.path}'
        ><router-link :to="item.path">
            <el-icon
              size="12"
              style="margin:0 5px;"
            >
              <component :is="item.icon" />
            </el-icon>{{ item.name }}
          </router-link>
          <el-icon
            size="16"
            class="close"
          >
            <close @click="deleteMenu(item,index)" />
          </el-icon>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <el-dropdown>
        <div class="el-dropdown-link flex-box">
          <el-avatar src=""></el-avatar>
          <p class="user-name">admin</p>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "../store/menu";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";

const store = useMenuStore();
const { selectMenu } = storeToRefs(store);
const route = useRoute();
const router = useRouter();
console.log(router);

function putAway() {
  store.collapseMenu();
}

const deleteMenu = (item: any, index: number) => {
  store.deleteMenu(item);
  // route.path !== item.path ? console.log(123) : console.log(1234);
  const selectMenuData = selectMenu.value;
  // console.log(route.path);
  // console.log(item.path);
  if (index == selectMenuData.length) {
    if (!selectMenuData.length) {
      router.push("/");
    } else {
      router.push({ path: selectMenuData[index - 1].path });
    }
  } else {
    router.push({ path: selectMenuData[index].path });
  }
};
</script>

<style scoped lang="less">
.flex-box {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-container {
  justify-content: space-between;
  height: 100%;
  background-color: #fff;

  .header-left {
    .icon {
      width: 45px;
      height: 100%;
      margin-right: 10px;
    }
    .selected {
      background-color: #f5f5f5;
      color: skyblue;
      border-radius: 10px 10px 0 0;
    }
    .icon:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
    .topline {
      font-size: 15px;
      padding-right: 5px;
      a {
        color: #333;
        display: inline-block;
        line-height: 49px;
      }
      .close {
        margin: 0 5px 0 3px;
        cursor: pointer;
        // visibility: hidden;
      }
      // .close:hover {
      //   visibility: inherit;
      // }
    }
    .topline:hover {
      background-color: #f5f5f5;
      border-radius: 8px 8px 0 0;
      color: brown;
      // visibility: inherit;
    }
  }
}

.header-right {
  padding-right: 10px;
}

.user-name {
  margin-left: 10px;
}
</style>
