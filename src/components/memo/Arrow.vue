<template>
    <div class="arrow" v-show="display"></div>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss">
    .arrow{
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #fff;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);
        transform: rotate(45deg);
        right: 35px;
        top: 75px;
        z-index: 10;
        &::before{
            content: '';
            position: absolute;
            width: 50px;
            height: 25px;
            top: 10px;
            background-color: #fff;
            transform: rotate(135deg);
        }
    }
</style>
