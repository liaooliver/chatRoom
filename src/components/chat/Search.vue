<template>
  <!-- 搜尋欄位 -->
  <div class="chat__search chat__rowHeight"
  :class="{'chat__hidden':isHiddenSearch}">
    <input type="text" autofocus
    :placeholder="$t('_search')"
    v-model="filterString"
    @keydown.enter="filtered_post()">
    <!-- 自動響應相符數量 -->
    <span>{{ counterResult }}{{ $t("_item") }}</span>
    <!-- 清除 -->
    <span @click="clearFilter()">
      <img width="26px" src="../../assets/img/ic_close1.png" alt="close" srcset="">
    </span>
  </div>
</template>

<script>

export default {
  props: {
    isHiddenSearch: {
      type: Boolean,
      required: true,
    },
    counterResult: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      filterString: '',
    };
  },
  methods: {
    filtered_post() {
      this.$emit('filterKeyword', this.filterString);
    },
    clearFilter() {
      this.filterString = '';
      this.$emit('initDialogue');
    },
  },
};

</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
