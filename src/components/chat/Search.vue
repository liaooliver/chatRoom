<template>
    <div class="chat__search chat__rowHeight"
    :class="{'chat__hidden':isHiddenSearch}">
      <input type="text" autofocus
      :placeholder="$t('_search')"
      v-model="filterString"
      @keydown.enter="filtered_post()">
      <span>1{{ $t("_item") }}</span>
      <span>
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
  },
  data() {
    return {
      filterString: '',
    };
  },
  methods: {
    filtered_post() {
      console.log(this.filterString);
    },
  },
};

</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
