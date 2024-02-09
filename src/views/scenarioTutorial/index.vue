<template>
  <div class="wrapper">
    <div class="content">
      <p><strong>Scenario - Tutorial:</strong></p>
      <p>
        On this page, you will walk through a tutorial that helps you
        familiarize with the environment and tasks you will implement in the
        three first-person perspective scenarios of this study.
      </p>
      <p>
        This tutorial does not count towards the Four first-person perspective
        scenarios for this study.
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
      <p>
        Please enter the Code at the end of the game below to confirm that you
        have completed the tutorial:
      </p>
      <div class="input-wrapper">
        <a-input
          style="width: 400px; margin-bottom: 30px; position: relative"
          allowClear
          v-model="gameCode"
          placeholder="please input code"
        />
        <p v-if="miss">Incorrect code</p>
      </div>
      <p>
        Now you have completed the tutorial! Click the ‘Proceed’ button below to
        start the first game scenario.
      </p>
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

export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {
      gameCode: "",
      miss: false,
      gameInfo: {
        src: "/unity/Scenario_Tutorial/index.html",
        code: "ST0BC",
      },
    };
  },
  computed: {},
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    gotoNext() {
      if (this.gameCode.trim() !== this.gameInfo.code) {
        this.miss = true;
      } else {
        this.$router.push("/gameExperience");
      }
    },
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
  .input-wrapper {
    height: auto;
    position: relative;
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