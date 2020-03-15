<template>
    <div class="memo" v-show="display">
        <div class="memo__add">
            <textarea
                v-model="memo"
                :placeholder="$t('_message')"></textarea>
            <button
                class="memo__add--pass"
                :disabled="isDisable"
                :class="{'memo__add--disabled':isDisable}"
                @click="addMemo($event)">{{ $t("_add") }}</button>
        </div>
        <div class="memo__sepline"></div>
        <ul class="memo__list">
            <li class="memo__item"
            v-for="(memo, index) in memos"
            :key="index">
                <p class="memo__item--date">{{ memo.date }}</p>
                <p class="memo__item--log">{{ memo.content }}</p>
                <span @click="deleteDemo(memo)">
                  <img width="10px" src="../../assets/img/ic_close2.png" alt="">
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    memos: {
      type: Array,
      required: true,
    },
    index: {
      type: String,
      required: true,
    },
    display: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      memo: '',
    };
  },
  computed: {
    isDisable() {
      return !(this.memo.length > 0);
    },
  },
  methods: {
    addMemo(e) {
      e.preventDefault();
      this.$store.dispatch('addNewMemo', {
        index: this.index,
        memo: {
          date: this.dateFormat(),
          content: this.memo,
        },
      });
      this.memo = '';
    },
    deleteDemo(value) {
      this.$store.dispatch('deleteMemo', {
        index: this.index,
        memo: value,
      });
    },
    dateFormat() {
      const current = new Date();
      const year = current.getFullYear();
      const month = this.addzreo(current.getMonth() + 1);
      const day = this.addzreo(current.getDate());
      const hour = this.addzreo(current.getHours());
      const min = this.addzreo(current.getMinutes());
      return `${year}/${month}/${day} ${hour}:${min}`;
    },
    addzreo(value) {
      return value < 10 ? `0${value}` : value;
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>
