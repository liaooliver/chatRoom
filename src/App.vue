<template>
  <div id="app">
    <SideBar></SideBar>
    <div class="chatRoom">
        <Title></Title>
      <div class="content">
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
