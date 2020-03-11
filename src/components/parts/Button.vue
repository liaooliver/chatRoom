<template>
    <button type="submit" :class="{'active':actived}">
        <slot></slot>
    </button>
</template>

<script>
export default {
  props: {
    actived: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variable.scss';
button{
    height: 28px;
    color: #fff;
    padding: 0px 20px;
    border-radius: 25px;
    border-color: #fff;
    background-color: transparent;
    margin-left: 8px;
    &.active{
      color: $mainColor;
      background-color: #fff;
    }
}
</style>
