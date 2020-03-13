<template>
    <div class="title">
        <div class="title__header">
            <div class="title__header--logo">Cherri Chat</div>
            <Button
            @toggleLang="toggleLang($event)"
            :actived="this.currentLang.tw">中文</Button>
            <Button
            @toggleLang="toggleLang($event)"
            :actived="this.currentLang.en">English</Button>
        </div>
        <div class="title__user">
            <Avatar />
            <p class="title__user--name">潔西卡</p>
        </div>
    </div>
</template>

<script>
import Avatar from './parts/Avatar.vue';
import Button from './parts/Button.vue';

export default {
  components: {
    Avatar,
    Button,
  },
  data() {
    return {
      currentLang: {
        tw: {
          name: 'tw',
          actived: true,
        },
        en: {
          name: 'en',
          actived: false,
        },
      },
    };
  },
  methods: {
    toggleLang(value) {
      this.currentLang.tw.actived = false;
      this.currentLang.en.actived = false;
      this.currentLang[value.name].actived = true;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/main.scss';
</style>
