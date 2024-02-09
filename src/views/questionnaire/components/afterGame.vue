<template>
  <div>
    <div class="survey">
      <p>
        <strong
          >Please indicate to what extent you agree with the following
          statements.</strong
        >
      </p>
    </div>
    <a-form-model
      ref="form"
      :model="form"
      @submit="handleSubmit"
      @submit.native.prevent
    >
      <p class="line-p"></p>
      <div
        v-for="(tableItem, tableIndex) in allQuesList"
        :key="tableIndex"
        class="table-wrapper"
      >
        <table border="0" width="100%" align="center">
          <tr class="head">
            <td style="border-right: 1px solid #efefef"></td>
            <td v-for="headItem in tableItem.headList" :key="headItem">
              {{ headItem }}
            </td>
          </tr>
          <tr v-for="(item, index) in tableItem.questList" :key="index">
            <a-form-model-item
              :prop="'table' + tableIndex + '.' + item.key"
              :rules="
                tableIndex === 1 && item.key === 'quest2'
                  ? {
                      required: true,
                      trigger: 'blur',
                      pattern: /.{20,}/,
                      message: 'Please enter no less than twenty bytes',
                    }
                  : {
                      required: true,
                      trigger: 'blur',
                      message: 'please select',
                    }
              "
            >
              <td class="require-radio">
                {{ item.content }}
              </td>
            </a-form-model-item>
            <td colspan="7" v-if="tableIndex === 1 && item.key === 'quest2'">
              <a-input v-model="form['table' + tableIndex][item.key]" />
            </td>
            <td
              v-else
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
</template>
<script>
import { mapGetters } from "vuex";
import { afterGameQuesList } from "../tool";
import { getRandomValue } from "../../../unit/tool";
export default {
  data() {
    return {
      afterGameQuesList,
      allQuesList: [],
      form: {
        table0: {},
        table1: {},
        table2: {},
        table3: {},
      },
      rulles: {},
      radioStyle: {
        display: "block",
      },
      ques1: "",
    };
  },
  mounted() {
    console.log(this.quesStep);
    this.setGameRandom();
  },
  computed: {
    patternString() {
      return this.form.table1["quest2"]?.length >= 20;
    },
  },
  methods: {
    setGameRandom() {
      this.allQuesList = JSON.parse(JSON.stringify(this.afterGameQuesList));
      if (this.quesStep === 3) {
        this.allQuesList[1].questList.push({
          key: "questRandom",
          content: "Please select ‘Somewhat agree’ for this question.",
        });
        console.log(this.allQuesList);
      }
    },
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        if (!valid) {
          return;
        }
        if (this.quesStep === 3 && this.form.table1.questRandom !== 5) {
          this.passUser();
          return;
        }
        let obj = { ...this.allQuestionForm };
        let afterGameQues = JSON.parse(
          JSON.stringify(this.allQuestionForm.afterGameQues || [])
        );
        afterGameQues.push({
          gameCode: this.gameStep,
          ...this.form,
        });
        obj.afterGameQues = afterGameQues;
        this.$store.commit("SET_ALL_QUESTION_FORM", {
          ...obj,
        });
        this.$store.commit("SET_QUES_STEP", this.quesStep + 1);
        //随机下一个游戏
        const nextArr = this.gameArrList.filter(
          (item) => item !== this.gameStep
        );
        if (nextArr.length) {
          const nextValue = getRandomValue(nextArr);
          this.$store.commit("SET_GAME_STEP", nextValue);
        }
        this.$store.commit("SET_GAME_ARR_LIST", nextArr);
        //判断是不是最后一个游戏
        if (this.quesStep <= 4) {
          this.$router.push("/gameExperience");
        } else {
          this.$router.push("/lastQuestionnaire");
        }
      });
    },
    checkRadio(item, tableindex, key) {
      this.$set(this.form["table" + tableindex], key, item);
    },
  },
};
</script>
<style lang="less" scoped>
* {
  font-size: 18px;
  color: #737373;
}
.survey {
  p {
    font-size: 20px !important;
    strong {
      font-size: 20px !important;
    }
  }
}
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
  background: #1890ff;
  transition: background 0.2s ease-in-out;
  span {
    color: #fff !important;
  }
}
.table-wrapper {
  border-bottom: 2px solid #efefef;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
</style>