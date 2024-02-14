<template>
  <div class="wrapper">
    <div class="game-box">
      <!-- <p class="tips-p">
        第{{ this.gameGroupType + 1 }}组，游戏嵌入界面,第{{ gameStep }}个游戏
      </p> -->
      <iframe
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
            src: "/unity/group1/Scenario_1/index.html",
            code: "S1ANP",
          },
          2: {
            src: "/unity/group1/Scenario_2/index.html",
            code: "S2BANS",
          },
        },
        // 第二组
        {
          3: {
            src: "/unity/group2/Scenario_3/index.html",
            code: "S5PSNP",
          },
          4: {
            src: "/unity/group2/Scenario_4/index.html",
            code: "S6SENR",
          },
        },
        //第三组
        {
          5: {
            src: "/unity/group3/Scenario_5/index.html",
            code: "S9PDNM",
          },
          6: {
            src: "/unity/group3/Scenario_6/index.html",
            code: "S10PDAN",
          },
        },
        //第四组
        {
          7: {
            src: "/unity/group3/Scenario_7/index.html",
            code: "S8KDNM",
          },
          8: {
            src: "/unity/group3/Scenario_8/index.html",
            code: "SP5DAN",
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["gameStep", "gameGroupType", "gameArrList"]),
  },
  mounted() {
    window.scrollTo(0, 0);
    console.log(
      ` 第${this.gameGroupType + 1}组，游戏嵌入界面,第${this.gameStep}个游戏`
    );
  },
  methods: {
    gotoNext() {
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
          this.$router.push("/gameExperience");
        } else {
          this.$router.push("/last_finish");
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