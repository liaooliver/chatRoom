<template>
  <ul class="sideBar__items">
    <li class="sideBar__item sideBar__item--style">
        <Avatar :showList="true"></Avatar>
        <div class="sideBar__person">
            <p class="sideBar__person--name">保羅</p>
            <p class="sideBar__person--content">大家好，我是保羅～</p>
        </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '../parts/Avatar.vue';

export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
