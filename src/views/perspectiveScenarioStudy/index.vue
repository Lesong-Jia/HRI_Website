<template>
  <div class="wrapper">
    <div class="pre-study">
      <p><strong>Part 2 - First Person Perspective Scenario Study: </strong></p>
      <p>
        You will experience
        <strong>4 first-person perspective scenarios through games</strong>,
        which simulate real-life privacy challenges you might encounter while
        using Virtual Reality (VR) applications and services. 
      </p>
      <p>
        After each scenario, you are required to
        <strong>complete a set of corresponding questions</strong> based on
        <strong>your experience in the game</strong>.
      </p>
      <p>After entering the scenario in each game, you should be able to:</p>
      <ul>
        <li>
          Move around the room with the Left/Right and Up/Down arrow keys on
          your keyboard.
        </li>
        <li>
          Interact
          with <strong>objects</strong> and <strong>characters</strong> within
          the room, <strong>following instructions</strong> given during the
          game.
        </li>
        <li>
          Provide an <strong>Correct Answer</strong> to the multiple choice
          question at the end of each game to proceed to the next scene. The
          multiple choice questions aim to help you understand key information
          in each scenario. Each scenario is expected to have 1 - 2 multiple
          choice questions.
        </li>
        <li>
          If you provide an <strong>Incorrect Answer</strong> to the multiple
          choice question at the end each game, the game will
          be <strong>terminated</strong>: you have to refresh the game window
          and start from the beginning. Your game progress will not be recorded.
        </li>
        <li>
          When you reached the end of each scenario,
          a <strong>Code</strong> will appear on the center of the screen. You
          should enter the <strong>Code</strong> on Qualtrics to proceed to the
          next step of this study.
        </li>
      </ul>
      <p>
        <strong
          >While playing the game, envision yourself as the player in
          first-person perspective and consider the scenario in each game as if
          it is happening in your actual life.</strong
        >
      </p>
      <p>
        On the next page, you will experience <strong
          >1 tutorial scenario</strong
        > to help you practice tasks described above. The tutorial scenario
        <strong
          > does not count towards the four first-person perspective
          scenarios</strong
        > for this study.
      </p>
      <p>
        Before you proceed, please provide the <strong
          >correct answers to the following questions</strong
        > to show that you understand the workflow of this part of the study.
      </p>
    </div>
    <p class="line-p"></p>
    <div class="content">
      <a-form-model
        ref="form"
        :model="form"
        @submit="handleSubmit"
        @submit.native.prevent
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <p>
          <strong
            >How many scenarios in total you will encounter in this part of the
            study?</strong
          >
        </p>
        <a-form-model-item
          prop="itemOne"
          :rules="[
            {
              required: true,
              pattern: /^B$/,
              message: 'Your answer to this question is incorrect!',
              trigger: 'blur',
            },
          ]"
        >
          <a-radio-group v-model="form.itemOne">
            <a-radio
              :class="
                form.itemOne === item.value
                  ? 'radio-check radio-active'
                  : 'radio-check'
              "
              :style="radioStyle"
              v-for="item in radioList[0].list"
              :value="item.value"
              :key="item.value"
            >
              <span :style="form.itemOne === item.value ? 'color:#fff' : ''">{{
                item.value + ". " + item.ques
              }}</span>
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <p class="line-p"></p>
        <p>
          <strong
            >What would happen if you provide an incorrect answer to the
            multiple choice question in the game?</strong
          >
        </p>
        <a-form-model-item
          prop="itemTwo"
          :rules="[
            {
              required: true,
              pattern: /^A$/,
              message: 'Your answer to this question is incorrect!',
              trigger: 'blur',
            },
          ]"
        >
          <a-radio-group v-model="form.itemTwo">
            <a-radio
              :class="
                form.itemTwo === item.value
                  ? 'radio-check radio-active'
                  : 'radio-check'
              "
              :style="radioStyle"
              v-for="item in radioList[1].list"
              :value="item.value"
              :key="item.value"
            >
              <span :style="form.itemTwo === item.value ? 'color:#fff' : ''">{{
                item.value + ". " + item.ques
              }}</span>
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="input-wrapper">
      <a-button
        type="primary"
        shape="round"
        :loading="loading"
        @click="handleSubmit"
        >Proceed</a-button
      >
    </div>
  </div>
</template>
<script>
import preventBack from "vue-prevent-browser-back"; //组件内单独引入
const radioList = [
  {
    answser: "B",
    list: [
      {
        ques: "4 Scenarios: four first-person perspective scenarios in games",
        value: "A",
      },
      {
        ques: "5 Scenarios: one tutorial scenario + four first-person perspective scenarios in games",
        value: "B",
      },
      {
        ques: "4 Scenarios: one tutorial scenario + three first-person perspective scenarios in games",
        value: "C",
      },
    ],
  },
  {
    answser: "A",
    list: [
      {
        ques: "The game will be terminated and you have to refresh the window to start from the beginning.",
        value: "A",
      },
      {
        ques: "You are allowed to re-select the correct answer on the same page to proceed.",
        value: "B",
      },
      {
        ques: "You will get a warning message, but you should be able to proceed to the next step.",
        value: "C",
      },
    ],
  },
];
export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {
      radioList,
      loading: false,
      form: {
        itemOne: "",
        itemTwo: "",
      },
      radioStyle: {
        display: "block",
        width: "auto",
        textAlign: "left",
        // height: "30px",
        // lineHeight: "30px",
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 1 },
      },
      wrapperCol: {
        xs: { span: 1 },
        sm: { span: 24 },
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        if (!valid) {
          return;
        }
        this.$router.push("/scenarioTutorial");
      });
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
  padding: 20px 8%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  .pre-study {
    // padding: 20px 8%;
    ul {
      // list-style-type: demical;
      margin-left: 40px;
    }
    ul li {
      list-style-position: outside;
      padding: 8px 0px;
    }
  }
  .content {
    width: 100%;
    // padding: 20px 8%;
    .radio-check {
      background: #efefef;
      width: 500px;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 10px;
      text-align: center;
      ::v-deep .ant-radio {
        display: none;
      }
    }

    .radio-active {
      background: #1890ff !important;
      transition: background 0.2s ease-in-out;
      span {
        color: #fff !important;
      }
    }
  }
}
</style>