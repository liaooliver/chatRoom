<template>
  <div class="sideBar__title sideBar__title--name">
    {{ $t("_friends") }}({{this.number.length}})
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
