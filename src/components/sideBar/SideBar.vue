<template>
  <div class="sideBar">
      <Title :number="firendsList" />
      <Items :firendsList="firendsList" />
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
  data() {
    return {
      firendsList: null,
    };
  },
  created() {
    this.firendsList = this.$store.state.firendsList;
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
