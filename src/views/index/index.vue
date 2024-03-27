<template>
  <div class="wrapper question" v-if="!this.forbidden">
    <!-- <p>游戏嵌入界面</p> -->
    <div class="process-box" v-if="active === 2"><instruction /></div>
    <div class="process-box" v-if="active === 1"><consent /></div>
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
import axios from 'axios';

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
    this.setupUnityListener();
  },
  beforeDestroy() {
    window.removeEventListener('UnityMessage', this.handleUnityMessage);
  },
  methods: {
    setupUnityListener() {
      window.addEventListener('UnityMessage', this.handleUnityMessage);
    },
    async handleUnityMessage(event) {
      this.$store.commit('SET_ALL_QUESTION_FORM', data);
      const options = {
        method: 'POST',
        url: 'https://urcqxtiie0.execute-api.us-east-2.amazonaws.com/staging/hriwebsite4eade50d-staging',
        headers: {'content-type': 'application/json'},
        data: {...this.allQuestionForm}
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    setIsPass() {
      this.$store.commit("SET_IS_PASS", false);
    },
    async gotoNext() {
      if (this.active === 1) {
        this.active = 2;
      } else {
        const timestamp = moment().format("YYYYMMDDHHmmss");
        const randomNum = Math.floor(Math.random() * 1000000); // 生成一个六位数的随机数
        const grouptype = "group1";
        const uniqueId = `${grouptype}${timestamp}${randomNum}`;
        this.$store.commit("SET_ALL_QUESTION_FORM", {
          ParticipantID: uniqueId,
        });
        this.$router.push("/lastQuestionnaire");
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