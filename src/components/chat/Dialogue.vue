<template>
    <div class="chat__dialogue">
      <!-- 透過上層傳遞資料到對話框渲染資料 -->
        <div
        v-for="(log, index) in dialogue"
        :key="index"
        v-html="log"
        class="chat__message chat__message--style"></div>
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
