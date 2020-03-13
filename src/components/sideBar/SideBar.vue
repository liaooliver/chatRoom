<template>
  <div class="sideBar">
      <Title :number=0 />
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
