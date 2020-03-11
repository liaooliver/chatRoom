<template>
  <div id="app">
    <div class="sideBar"></div>
    <div class="chatRoom">
        <Title></Title>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';

export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
