<template>
    <span class="avatar" :class="{'list':this.showList, 'user':this.showUser}">
        <img src="../../assets/img/user.png" alt="">
    </span>
</template>

<script>
export default {
  props: {
    showList: {
      type: Boolean,
      required: false,
      default: false,
    },
    showUser: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    img{
        width: 60%;
    }
    &.list{
      width: 56px;
      height: 56px;
      border: 1px solid;
      border-color: rgb(66, 223, 190);
    }
    &.user{
      border: 1px solid;
      border-color: rgb(66, 223, 190);
    }
}
</style>
