<template>
    <div class="chat">
        <User @openSearch="openSearch($event)" />
        <div class="chat__message chat__rowHeight"
        :class="{'chat__hidden':isHiddenSearch}">
          <input type="text" name="" id="" autofocus placeholder="搜尋">
          <span>1則相符訊息</span>
          <span>
            <img width="26px" src="../assets/img/ic_close1.png" alt="close" srcset="">
          </span>
        </div>
        <div class="chat__content"></div>
        <div class="chat__add chat__rowHeight">
          <input type="text" name="" id="" autofocus placeholder="輸入訊息...">
          <span>
            <img width="36px" src="../assets/img/ic_sent.png" alt="sent" srcset="">
          </span>
        </div>
    </div>
</template>

<script>
import User from '../components/chat/user.vue';

export default {
  components: {
    User,
  },
  data() {
    return {
      isHiddenSearch: false,
    };
  },
  methods: {
    openSearch(event) {
      this.isHiddenSearch = !event;
    },
  },
};

</script>

<style lang="scss">
@import '../assets/styles/main.scss';
</style>
