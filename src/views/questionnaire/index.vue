<template>
  <div class="wrapper" v-if="quesStep">
    <div class="content">
      <!-- <p class="tips-p">问卷界面,第{{ quesStep }}个问卷</p> -->
      <after-game ref="afterGame" />
    </div>
    <div class="input-wrapper">
      <a-button
        type="primary"
        shape="round"
        :loading="loading"
        @click="handleSubmit"
        >Next</a-button
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AfterGame from "./components/afterGame.vue";
import preventBack from "vue-prevent-browser-back"; //组件内单独引入
export default {
  mixins: [preventBack], //注入  阻止返回上一页
  components: { AfterGame },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.toIndex();
    if (!this.quesStep) {
      this.$router.push({ name: "index" });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    console.log(`问卷界面,第${this.quesStep}个问卷`);
  },
  computed: {
    ...mapGetters(["gameStep", "quesStep"]),
  },
  methods: {
    handleSubmit() {
      this.$refs.afterGame.handleSubmit();
    },
    checkRadio(item, key) {
      this.$set(this.form, key, item);
      console.log(item, key);
    },
    changeLoading(value) {
      this.loading = value;
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  .content {
    padding: 20px 8%;
  }
}
</style>