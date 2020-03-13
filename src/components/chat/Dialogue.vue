<template>
    <div class="chat__dialogue">
        <div
        v-for="(log, index) in dialogue"
        :key="index"
        class="chat__message chat__message--style">{{ log }}</div>
    </div>
</template>

<script>
export default {
  props: {
    dialogue: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
