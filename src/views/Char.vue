<template>
    <div class="chat">
      <!-- user row -->
      <User
      @openSearch="openSearch($event)"
      @openMemo="openMemo($event)"
      :current="currentDialogue[0]" />
      <!-- search row -->
      <Search
      @filterKeyword="filterKeyword($event)"
      @initDialogue="initDialogue($route.params.user)"
      :counterResult="counterResult"
      :isHiddenSearch="isHiddenSearch"></Search>
      <!-- Dialogue area -->
      <Dialogue :dialogue="dialogue"></Dialogue>
      <!-- message send -->
      <Send></Send>
      <!-- memo popup -->
      <Arrow
      :display="isDispalyMemo"></Arrow>
      <Memo
      :display="isDispalyMemo"
      :memos="memos"
      :index="$route.params.user"></Memo>
    </div>
</template>

<script>
import User from '../components/chat/User.vue';
import Search from '../components/chat/Search.vue';
import Dialogue from '../components/chat/Dialogue.vue';
import Send from '../components/chat/Send.vue';
import Memo from '../components/memo/Memo.vue';
import Arrow from '../components/memo/Arrow.vue';

export default {
  components: {
    User,
    Search,
    Dialogue,
    Send,
    Memo,
    Arrow,
  },
  watch: {
    '$route.params.user': {
      handler(index) {
        this.isDispalyMemo = false;
        this.isHiddenSearch = true;
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
      currentDialogue: null,
      dialogue: null,
      memos: null,
      isDispalyMemo: false,
      isHiddenSearch: true,
    };
  },
  methods: {
    openSearch(event) {
      this.isHiddenSearch = !event;
    },
    openMemo(event) {
      this.isDispalyMemo = event;
    },
    initDialogue(index) {
      this.$store.dispatch('resetCounter');
      this.currentDialogue = this.$store.getters.filterFirends(index);
      this.dialogue = this.currentDialogue[0].dialogue;
      this.memos = this.currentDialogue[0].memo;
    },
    // 篩選關鍵字
    filterKeyword(event) {
      this.$store.dispatch('resetCounter');
      const index = 0;
      // 在 Vuex 處理搜尋關鍵字邏輯
      const filter = this.$store.getters.filterString(event, this.$route.params.user);
      this.dialogue = filter[index];
    },
  },
};

</script>

<style lang="scss">
@import '../assets/styles/main.scss';
</style>
