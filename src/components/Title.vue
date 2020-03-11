<template>
    <div class="title">
        <div class="title__header">
            <div class="title__header--logo">Cherri Chat</div>
            <Button :actived="true">中文</Button>
            <Button :actived="false">English</Button>
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
};
</script>

<style lang="scss">
@import '../assets/styles/main.scss';
</style>
