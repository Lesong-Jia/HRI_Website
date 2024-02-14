<template>
  <div class="wrapper">
    <div class="pre-study">
      <p><strong>Part 1 - Pre-study Questions:</strong></p>
      <p>
        We would like to ask you some questions about your emotional life, in particular, how you control (that is, regulate and manage) your emotions.
        The questions below involvetwo distinct aspects of your emotional life. 
        One is your emotional experience, or what you feel like inside. 
        The other is your emotional expression, or how you show you emotions in the way you talk, gesture, or behave. 
        Although some of the following questions may seem similar to one another, they differ in important ways.
      </p>
      <!-- <p>
        There are questions which require you to
        <strong>select the specific answer indicated in the question</strong>.
        If you <strong>failed to select the specific answer</strong> as required
        in the question, your study will
        <strong
          >be terminated. You will not be compensated for the study.</strong
        >
      </p> -->
    </div>
    <div class="content">
      <a-form-model
        ref="form"
        :model="form"
        @submit="handleSubmit"
        @submit.native.prevent
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <div
          v-for="(tableItem, tableIndex) in allQuestList"
          :key="tableIndex"
          class="table-wrapper"
        >
          <table border="0" width="100%" align="center">
            <tr class="head">
              <td style="border-right: 1px solid #efefef"></td>
              <td v-for="headItem in tableItem.headList" :key="headItem" v-html="headItem"></td>
              <!-- <td v-for="headItem in tableItem.headList" :key="headItem">
                {{ headItem }}
              </td> -->
            </tr>
            <tr v-for="(item, index) in tableItem.questList" :key="index">
              <a-form-model-item
                :prop="'table' + tableIndex + '.' + item.key"
                :rules="{
                  required: true,
                  trigger: 'blur',
                  message: 'please select',
                }"
              >
                <td class="require-radio">
                  {{ item.content }}
                </td>
              </a-form-model-item>
              <td
                v-for="(radioItem, radioIndex) in tableItem.headList"
                :key="radioItem + radioIndex"
              >
                <a-radio
                  :style="radioStyle"
                  :value="radioItem"
                  @click="checkRadio(radioIndex + 1, tableIndex, item.key)"
                  :checked="
                    form['table' + tableIndex][item.key] == radioIndex + 1
                  "
                />
              </td>
            </tr>
          </table>
        </div>
      </a-form-model>
    </div>
    <div class="input-wrapper">
      <a-button
        type="primary"
        shape="round"
        :disabled="loading"
        :loading="loading"
        @click="handleSubmit"
        >Next</a-button
      >
    </div>
  </div>
</template>
<script>
import preventBack from "vue-prevent-browser-back"; //组件内单独引入
import { allQuestList } from "./tool";
import { getRandomValue, allGameArr } from "../../unit/tool";
import api from "@/api/index.js";

export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {
      // gameGroupType: "",
      allQuestList,
      loading: false,
      form: {
        table0: {},
      },
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
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
    this.setGameGroupType();
  },
  created() {
    this.toIndex();
  },
  methods: {
    setGameGroupType() {
      const grouptype = Math.floor(Math.random() * (4)) + 1;;
      this.$store.commit("SET_GAME_GROUP_TYPE", grouptype);
      this.$store.commit(
        "SET_GAME_ARR_LIST",
        allGameArr[this.gameGroupType]
      );
      // console.log(23333);  
      // console.log(this.gameGroupType);  

      // api.getIndex().then((res) => {
      //   console.log(23333);  
      //   if (res.code === 200) {
      //     this.$store.commit("SET_GAME_GROUP_TYPE", res.data);
      //     this.$store.commit(
      //       "SET_GAME_ARR_LIST",
      //       allGameArr[this.gameGroupType]
      //     );
      //     console.log(23333);  
      //     console.log(this.gameGroupType);  
      //   }
      // });
    },
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        if (!valid) {
          return;
        }
        this.loading = true;
        if (this.form.table0.quest10 !== 5) {
          this.$router.push("/last_fail");
          // this.passUser();
          return;
        }
        // 获取数组中一个随机值
        const startValue = getRandomValue(this.gameArrList);
        console.log(this.gameArrList);
        console.log(startValue);
        console.log(this.allQuestionForm);
        // 保存第一次的问卷
        this.$store.commit("SET_ALL_QUESTION_FORM", {
          ...this.allQuestionForm,
          startQuestionnaire: { ...this.form },
        });
        // 进入游戏一 ，改变步骤状态，随机游戏界面，进入选择题页
        this.$store.commit("SET_GAME_STEP", startValue);
        this.$store.commit("SET_QUES_STEP", 1);
        this.$router.push("/perspectiveScenarioStudy");
      });
    },
    checkRadio(item, tableindex, key) {
      this.$set(this.form["table" + tableindex], key, item);
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
  .pre-study {
    padding: 20px 8%;
  }
  .content {
    padding: 20px 8%;
  }
  .table-wrapper {
    border-bottom: 2px solid #efefef;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
}
</style>