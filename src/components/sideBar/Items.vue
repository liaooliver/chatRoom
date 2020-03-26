<template>
  <!-- 側邊欄位的項目 -->
  <ul class="sideBar__items">
    <router-link tag="li" class="sideBar__item sideBar__item--style"
    v-for="item in firendsList"
    :key="item.index" :to="`/chat/${item.index}`">
        <Avatar
        :image="item.imgUrl"
        :showList="true"></Avatar>
        <div class="sideBar__person">
            <p class="sideBar__person--name">{{ item.name }}</p>
            <p class="sideBar__person--content">{{ item.log }}</p>
        </div>
    </router-link>
  </ul>
</template>

<script>
import Avatar from '../parts/Avatar.vue';

export default {
  components: {
    Avatar,
  },
  props: {
    firendsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
