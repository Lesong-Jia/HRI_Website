<template>
  <div class="wrapper question" v-if="!this.forbidden">
    <!-- <p>游戏嵌入界面</p> -->
    <div class="process-box" v-if="active === 1"><instruction /></div>
    <div class="process-box" v-if="active === 2"><consent /></div>
    <div class="input-wrapper">
      <a-button type="primary" shape="round" @click="gotoNext"
        >{{ active === 2 ? "Confirm" : "Proceed" }}
        <a-icon
          v-if="active === 1"
          type="arrow-right"
          style="color: #fff !important"
        />
      </a-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import consent from "./components/consent.vue";
import instruction from "./components/instruction.vue";
export default {
  components: { instruction, consent },
  data() {
    return {
      active: 1,
      forbidden: false,
    };
  },
  watch: {
    active(val) {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapGetters(["gameStep", "allQuestionForm", "isPass"]),
  },
  mounted() {
    this.setIsPass();
  },
  methods: {
    setIsPass() {
      this.$store.commit("SET_IS_PASS", false);
    },
    gotoNext() {
      if (this.active === 1) {
        this.active = 2;
      } else {
        this.$store.commit("SET_ALL_QUESTION_FORM", {
          startTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
        this.$router.push("/startQuestionnaire");
      }
    },
    // unity发送事件执行
    unityWatch(obj) {
      console.log(obj.detail); // 这里写需要的后续js逻辑
    },
    unitySendMessage() {
      /** 参数：
       * 1. unity定义的对象（每个unity工程师喜欢的名字不一样）
       * 2. 调用unity的方法名字
       * 3. unity接收的参数
       */
      this.$refs.iframe.contentWindow.unityInstance.SendMessage(
        "WebInvoker",
        "Unity_InsertNaviPoint",
        "这是参数"
      );
    },
  },
  deactivated() {
    window.removeEventListener("UIClick", this.unityWatch);
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .process-box {
    width: 100%;
    // height: 85%;
    // border: 1px dashed #efefef;
    display: flex;
    justify-content: center;
    // overflow: auto;
    padding: 10px;
  }
}
</style>