<template>
    <div class="chat__user chat__rowHeight">
        <span class="chat__username">
            <Avatar :showUser='true' :image='current.imgUrl'></Avatar>
            <p class="chat__username--name">{{ current.name }}</p>
        </span>
        <span
        @click="active('search')"
        class="chat__icon"
        :class="{'chat__icon--active': this.actived.search}">
            <img src="../../assets/img/ic_search.png" alt="search">
        </span>
        <span
        @click="active('note')"
        class="chat__icon"
        :class="{'chat__icon--active': this.actived.note}">
            <img src="../../assets/img/ic_note.png" alt="note">
        </span>
    </div>
</template>

<script>
import Avatar from '../parts/Avatar.vue';

export default {
  components: {
    Avatar,
  },
  props: {
    current: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      actived: {
        search: false,
        note: false,
      },
    };
  },
  methods: {
    active(value) {
      if (this.actived[value]) {
        this.actived[value] = !this.actived[value];
      } else {
        this.actived.search = false;
        this.actived.note = false;
        this.actived[value] = true;
      }
      this.$emit('openSearch', this.actived.search);
      this.$emit('openMemo', this.actived.note);
    },
  },
};

</script>
<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
