<template>
  <!-- 最上層頁面 -->
  <div id="app">
    <!-- 側邊欄 -->
    <SideBar></SideBar>
    <!-- 主要聊天室區塊 -->
    <div class="chatRoom">
      <!-- 聊天室標頭 -->
      <Title></Title>
      <!-- 聊天室內容區塊 -->
      <div class="content">
        <!-- 使用路由切換user -->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sideBar/SideBar.vue';
import Title from './components/Title.vue';


export default {
  components: {
    Title,
    SideBar,
  },
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
