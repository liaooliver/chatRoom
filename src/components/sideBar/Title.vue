<template>
  <div class="sideBar__title sideBar__title--name">
    好友列表({{this.number}})
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
