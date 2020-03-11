<template>
  <div class="sideBar">
      <Title />
      <Items />
  </div>
</template>

<script>
import Title from './Title.vue';
import Items from './Items.vue';

export default {
  components: {
    Title,
    Items,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
