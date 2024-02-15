<template>
  <div class="wrapper">
        <!-- Video overlay -->
    <div class="video-overlay" v-if="showVideo">
      <video 
        id="overlayVideo" 
        @ended="onVideoEnded" 
        controls autoplay 
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 10;">
        <source :src="gameStep === 1 ? 'Video/Cryboy.mp4' : 'Video/Celebration.mp4'" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    
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
        style="width: 400px; margin-bottom: 30px; position: relative"
        allowClear
        v-model="gameCode"
        placeholder="please input code"
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
            src: "/unity/group1/Positive_Scenario/index.html",
            code: "S5PSNP",
          },
          4: {
            src: "/unity/group1/Negative_Scenario/index.html",
            code: "ST0BC",
          },
        },
        //第三组
        {
          5: {
            src: "/unity/group1/Positive_Scenario/index.html",
            code: "S9PDNM",
          },
          6: {
            src: "/unity/group1/Negative_Scenario/index.html",
            code: "ST0BC",
          },
        },
        //第四组
        {
          7: {
            src: "/unity/group1/Positive_Scenario/index.html",
            code: "S8KDNM",
          },
          8: {
            src: "/unity/group1/Negative_Scenario/index.html",
            code: "ST0BC",
          },
        },
      ],
      showVideo: true, // 控制视频的显示
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
          this.$router.push("/gameExperience");
        } else {
          this.$router.push("/last_finish");
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
    height: 85%;
    border: 1px dashed #efefef;
  }
  .input-wrapper {
    position: relative;
    height: auto;
    p {
      color: red;
      position: absolute;
      font-size: 12px;
      margin: 0px;
      bottom: 0px;
      // top: 10px;
      // left: 40%;
    }
  }
}
</style>