<template>
  <div class="wrapper">
    <p>Thank you for participating</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import preventBack from "vue-prevent-browser-back"; //组件内单独引入

export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {};
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    ...mapGetters(["gameStep", "allQuestionForm"]),
  },
  mounted() {
    console.log(this.$route.query);
    this.$store.commit("SET_ALL_QUESTION_FORM", {});
    this.$store.commit("SET_GAME_STEP", "");
    this.$store.commit("SET_QUES_STEP", "");
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8%;
  p {
    font-size: 40px;
    word-spacing: 10px;
  }
}
</style>