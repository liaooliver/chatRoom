<template>
    <div class="chat">
        <User
        @openSearch="openSearch($event)"
        :current="currentDialogue[0]" />
        <Search
        @filterKeyword="filterKeyword($event)"
        @initDialogue="initDialogue($route.params.user)"
        :counterResult="counterResult"
        :isHiddenSearch="isHiddenSearch"></Search>
        <Dialogue :dialogue="dialogue"></Dialogue>
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
        this.initDialogue(index);
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    counterResult() {
      return this.$store.getters.counterResult();
    },
  },
  data() {
    return {
      isHiddenSearch: true,
      currentDialogue: null,
      dialogue: null,
    };
  },
  methods: {
    openSearch(event) {
      this.isHiddenSearch = !event;
    },
    initDialogue(index) {
      console.log('執行了');
      this.$store.dispatch('resetCounter');
      this.currentDialogue = this.$store.getters.filterFirends(index);
      this.dialogue = this.currentDialogue[0].dialogue;
    },
    filterKeyword(event) {
      this.$store.dispatch('resetCounter');
      const index = 0;
      const filter = this.$store.getters.filterString(event, this.$route.params.user);
      this.dialogue = filter[index];
    },
  },
};

</script>

<style lang="scss">
@import '../assets/styles/main.scss';
</style>
