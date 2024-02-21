<template>
  <div class="wrapper">
    <div class="content">
      <p><strong>Scenario - Tutorial:</strong></p>
      <p>
        On this page, you will walk through a tutorial that helps you
        familiarize with the tasks you will implement in the
        three first-person perspective scenarios of this study.
      </p>
    </div>
    <div class="game-box">
      <iframe
        id="unity"
        ref="unity"
        :src="gameInfo.src"
        style="width: 100%; height: 100%"
        frameborder="0"
      />
    </div>
    <div class="content">
      <div class="input-wrapper">
        <a-input
          style="width: 400px; position: relative"
          allowClear
          v-model="gameCode"
          @input="toUpper"
          placeholder="please input code"
        />
        <p v-if="miss">Incorrect code</p>
      </div>
      <div class="input-wrapper">
        <a-button type="primary" shape="round" @click="gotoNext">
          Proceed
          <a-icon type="arrow-right" style="color: #fff !important" />
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import preventBack from "vue-prevent-browser-back"; //组件内单独引入  
import axios from 'axios';

export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {
      gameCode: "",
      miss: false,
      gameInfo: {
        src: "/unity/Scenario_Tutorial/index.html",
        code: "WE4JD",
      },
    };
  },
  computed: {},
  mounted() {
    window.scrollTo(0, 0);
    //forreveiveData
    window.addEventListener('message', this.receiveMessage, false);
  },
  //for receiveData
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  },

  methods: {
    toUpper(event) {
      this.gameCode = event.target.value.toUpperCase();
    },
    gotoNext() {
      if (this.gameCode.trim() !== this.gameInfo.code) {
        this.miss = true;
      } else {
        this.$router.push("/gameExperience");
      }
    },
    //for receivedata
    async receiveMessage(event) {
      let parsedData;
      try {
        parsedData = JSON.parse(event.data);
        console.log(parsedData);
      } catch (e) {
        console.error("Failed to parse the received message:", e);
        return; // Exit the method early if parsing fails
      }
      console.log(event.data);
      this.$store.commit("SET_ALL_QUESTION_FORM", {
        ...this.allQuestionForm,
        ...parsedData, // Merge parsed data with existing form data
      });
      const options = {
        method: 'POST',
        url: 'https://urcqxtiie0.execute-api.us-east-2.amazonaws.com/staging/hriwebsite4eade50d-staging',
        headers: {'content-type': 'application/json'},
        data: {...this.allQuestionForm}
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  },
};

</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    padding: 10px 8%;
  }
  .game-box {
    width: 100%;
    height: 85%;
    border: 1px dashed #efefef;
  }
  // .input-wrapper {
  //   height: auto;
  //   position: relative;
  //   p {
  //     color: red;
  //     position: absolute;
  //     font-size: 12px;
  //     margin: 0px;
  //     bottom: 0px;
  //     // top: 10px;
  //     // left: 40%;
  //   }
  // }
  .input-wrapper {
    position: relative;
    height: 70px;
    top: 10px
    
    /* 不要在这里设置 height 或 font-size */
  }
  .input-wrapper /deep/ .ant-input{
    position: relative;
    height: 50px;
    font-size: 20px;
    // p {
    //   color: red;
    //   position: absolute;
    //   font-size: 20px;
    //   margin: 0px;
    //   bottom: 0px;
    // }
  }
    .input-wrapper p{
    margin: 0; /* 移除默认外边距 */
    padding: 0; /* 如果需要，也移除默认内边距 */
    color: red;
    font-size: 12px; /* 或任何合适的大小 */
    line-height: 1; /* 防止行高过大 */
    position: relative; /* 如果您需要它绝对定位 */
    bottom: 0; /* 定位到 input-wrapper 的底部 */
    left: 0; /* 定位到 input-wrapper 的左边 */
    border: 1px solid red; /* 临时边框，用于调试 */

  }
}
</style>