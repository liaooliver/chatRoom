<template>
    <div class="chat">
        <User
        @openSearch="openSearch($event)"
        :current="currentDialogue[0]" />
        <Search :isHiddenSearch="isHiddenSearch"></Search>
        <Dialogue :dialogue="currentDialogue[0].dialogue"></Dialogue>
        <Send></Send>
    </div>
</template>

<script>
import User from '../components/chat/User.vue';
import Search from '../components/chat/Search.vue';
import Dialogue from '../components/chat/Dialogue.vue';
import Send from '../components/chat/Send.vue';

export default {
  components: {
    User,
    Search,
    Dialogue,
    Send,
  },
  watch: {
    '$route.params.user': {
      handler(index) {
        this.currentDialogue = this.$store.getters.filterFirends(index);
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      isHiddenSearch: true,
      currentDialogue: null,
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
