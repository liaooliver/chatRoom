<template>
    <div class="title">
        <div class="title__header">
            <router-link tag="p" to="/" class="title__header--logo">Cherri Chat</router-link>
            <Button
            @toggleLang="toggleLang($event)"
            :actived="this.currentLang.tw">中文</Button>
            <Button
            @toggleLang="toggleLang($event)"
            :actived="this.currentLang.en">English</Button>
        </div>
        <div class="title__user">
            <Avatar :image="imageUrl" />
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
      imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Default&skinColor=Tanned',
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
      this.$i18n.locale = value.name;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/main.scss';
</style>
