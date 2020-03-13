<template>
    <span class="avatar" :class="{'list':this.showList, 'user':this.showUser}">
        <img :src="image" alt="">
    </span>
</template>

<script>
export default {
  props: {
    showList: {
      type: Boolean,
      required: false,
      default: false,
    },
    showUser: {
      type: Boolean,
      required: false,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/avatar.scss';
</style>
