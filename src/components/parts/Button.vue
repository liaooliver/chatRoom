<template>
  <button type="submit" :class="{'active':actived.actived}" @click="toggleLang($event,'tw')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['actived'],
  methods: {
    toggleLang() {
      this.$emit('toggleLang', this.actived);
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
    background-color: transparent;
    margin-left: 8px;
    border: 0px;
    box-shadow: 0 0 0 1px #fff;
    &.active{
      color: $mainColor;
      background-color: #fff;
    }
}
</style>
