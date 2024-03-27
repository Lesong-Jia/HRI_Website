<template>
  <div class="wrapper">
        <!-- Video overlay -->
    <!-- <div class="video-overlay" v-if="showVideo">
      <video 
        id="overlayVideo" 
        @ended="onVideoEnded" 
        controls autoplay 
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 10;">
        <source :src="gameStep % 2 === 0 ? 'Video/Cryboy.mp4' : 'Video/Celebration.mp4'" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
     -->
    <div class="game-box">
      <iframe
        v-show="!showVideo"
        id="unity"
        ref="unity"
        :src="group[gameGroupType][gameStep]?.src"
        style="width: 100%; height: 100%"
        frameborder="0"
      />
    </div>
    <div class="input-wrapper" v-if="gameStep">
      <a-input
        style="width: 500px; position: relative"
        allowClear
        v-model="gameCode"
        @input="toUpper"
        placeholder="please input code after finishing the game above"
      />
      <p v-if="miss">Incorrect code</p>
    </div>
    <div class="input-wrapper" v-if="gameStep" style="padding-bottom: 20px">
      <a-button type="primary" shape="round" @click="gotoNext">Next</a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import preventBack from "vue-prevent-browser-back"; //组件内单独引入
import { getRandomValue } from "../../unit/tool";
import axios from 'axios';

export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {
      gameCode: "",
      miss: false,
      group: [
        // 第一组
        {
          1: {
            src: "/unity/group1/Positive_Scenario/index.html",
            code: "OY5FD",
          },
          2: {
            src: "/unity/group1/Negative_Scenario/index.html",
            code: "ST0BC",
          },
        },
        // 第二组
        {
          3: {
            src: "/unity/group2/Positive_Scenario/index.html",
            code: "OY5FD",
          },
          4: {
            src: "/unity/group2/Negative_Scenario/index.html",
            code: "ST0BC",
          },
        },
      ],
      showVideo: false, // 控制视频的显示
    };
  },
  computed: {
    ...mapGetters(["gameStep", "gameGroupType", "gameArrList"]),
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener('message', this.receiveMessage, false);
    console.log(
      ` 第${this.gameGroupType + 1}组，游戏嵌入界面,第${this.gameStep}个游戏`
    );
  },
  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  },
  methods: {
    toUpper(event) {
      this.gameCode = event.target.value.toUpperCase();
    },
    onVideoEnded() {
      this.showVideo = false; // 视频播放完毕，隐藏视频并显示游戏
    },
    receiveMessage(event) {
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
    },
    async gotoNext() {
      this.gameCode = this.gameCode.trim();
      if (
        this.gameCode !== this.group[this.gameGroupType][this.gameStep]?.code
      ) {
        this.miss = true;
      } else {
        this.gameCode = ""; // 清空输入
        this.miss = false; // 如果需要，也可以隐藏错误信息
        const nextArr = this.gameArrList.filter(
          (item) => item !== this.gameStep
        );
        if (nextArr.length) {
          const nextValue = getRandomValue(nextArr);
          this.$store.commit("SET_GAME_STEP", nextValue);
        }
        this.$store.commit("SET_GAME_ARR_LIST", nextArr);
        this.$store.commit("SET_QUES_STEP", this.quesStep + 1);
        //判断是不是最后一个游戏
        if (this.quesStep <= 2) {
          this.showVideo =true;
          this.$router.push("/Before_New");
        } else {          
          this.$router.push("/EndQuestionnaire");
          // const options = {
          //   method: 'POST',
          //   url: 'https://urcqxtiie0.execute-api.us-east-2.amazonaws.com/staging/hriwebsite4eade50d-staging',
          //   headers: {'content-type': 'application/json'},
          //   data: {...this.allQuestionForm}
          // };
          // try {
          //   const { data } = await axios.request(options);
          //   this.$router.push("/last_finish");
          // } catch (error) {
          //   this.$router.push("/last_finish");
          // }
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;

  .game-box {
    width: 100%;
    height: 90%;
    border: 1px dashed #efefef;
  }

//   .input-wrapper /deep/ .ant-input {
//   height: 50px !important; // 调整输入框的高度
//   font-size: 20px !important; // 调整输入框内字体大小
//   margin: 0px;
//   bottom: 0px;
//   position: relative;
// }

// .input-wrapper p {
//   margin: 0; /* 移除外边距 */
//   padding: 0; /* 移除内边距，如果有的话 */
//   /* 其他样式保持不变 */
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