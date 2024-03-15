<template>
  <div>
    <a-form-model
      ref="form"
      :model="form"
      @submit="handleSubmit"
      @submit.native.prevent
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
    <p><strong>Part 1 - Pre-study Questions:</strong></p>
    <p class="line-p"></p>
      <div style="display: flex; align-items: center; margin: 20px 0px">
        <p class="require-radio">Please enter your age:</p>
        <a-form-model-item
          prop="age"
          :rules="{
            required: true,
            trigger: 'blur',
            message: 'please enter a number ',
          }"
        >
          <p
            style="
              border-bottom: 1px solid #999;
              width: 300px;
              padding-bottom: 5px;
            "
          >
            <a-input-number
              id="inputNumber"
              v-model="form.age"
              :min="0"
              :max="130"
            />
          </p>
        </a-form-model-item>
      </div>
      <p class="line-p"></p>
      <div style="margin: 20px 0px">
        <p class="require-radio">How do you describe yourself?</p>
        <a-form-model-item
          prop="radio1"
          :rules="{
            required: true,
            trigger: 'blur',
            message: 'please select',
          }"
        >
          <a-radio-group v-model="form.radio1">
            <a-radio
              :class="
                form.radio1 === item
                  ? 'radio-check radio-active'
                  : 'radio-check'
              "
              :style="radioStyle"
              v-for="item in radioList1"
              :value="item"
              :key="item"
            >
              <span :style="form.radio1 === item ? 'color:#fff' : ''">{{
                item
              }}</span>
              <span
                v-if="item === 'D. Self describe:'"
                style="
                  display: inline-block;
                  border-bottom: 1px solid #999;
                  width: 300px;
                "
                ><a-input
                  v-model="others"
                  :style="form.radio1 === item ? 'color:#fff' : ''"
                />
              </span>
            </a-radio>
            <span v-show="isInputOthers" style="color: red">please input</span>
          </a-radio-group>
        </a-form-model-item>
      </div>
      <p class="line-p"></p>
      <div
        style="margin: 20px 0px"
        v-for="radioList in radioListAll1"
        :key="radioList.key"
      >
        <p class="require-radio">{{ radioList.quest }}</p>
        <a-form-model-item
          :prop="radioList.key"
          :rules="{
            required: true,
            trigger: 'blur',
            message: 'please select',
          }"
        >
          <a-radio-group v-model="form[radioList.key]">
            <a-radio
              :class="
                form[radioList.key] === item
                  ? 'radio-check radio-active'
                  : 'radio-check'
              "
              :style="radioStyle"
              v-for="item in radioList.list"
              :value="item"
              :key="item"
            >
              <span :style="form[radioList.key] === item ? 'color:#fff' : ''">{{
                item
              }}</span>
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <p class="line-p"></p>
      </div>
      <!-- <div>
        <p style="width: 600px">
          What Virtual Reality products (eg. Virtual Reality (VR) Glasses,
          Oculus, HoloLens), or services(eg. Virtual Reality Exposure Therapy,
          Virtual Reality Classroom), you have experienced？
        </p>
        <p class="require-radio" style="display: inline-block; margin-top: 0px">
          Please specify:
        </p>
        <a-form-model-item
          style="display: inline-block"
          prop="otherComments"
          :rules="{
            required: true,
            message: 'please input',
          }"
        >
          <p style="border-bottom: 1px solid #999; width: 500px">
            <a-input v-model="form.otherComments" />
          </p>
        </a-form-model-item>
      </div>
      <p class="line-p"></p> -->
      <div
        style="margin: 20px 0px"
        v-for="radioList in radioListAll2"
        :key="radioList.key"
      >
        <p class="require-radio">{{ radioList.quest }}</p>
        <a-form-model-item
          :prop="radioList.key"
          :rules="{
            required: true,
            trigger: 'blur',
            message: 'please select',
          }"
        >
          <a-radio-group v-model="form[radioList.key]">
            <a-radio
              :class="
                form[radioList.key] === item
                  ? 'radio-check radio-active'
                  : 'radio-check'
              "
              :style="radioStyle"
              v-for="item in radioList.list"
              :value="item"
              :key="item"
            >
              <span :style="form[radioList.key] === item ? 'color:#fff' : ''">{{
                item
              }}</span>
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <p class="line-p"></p>
      </div>
    </a-form-model>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import api from "@/api/index.js";
import {
  radioList1,
  radioList2,
  radioList3,
  radioList4,
  radioList5,
  radioList6,
  radioList7,
  radioList8,
} from "../tool";

const radioListAll1 = [
  {
    quest: "What is the highest level of education you have completed:",
    key: "radio2",
    list: radioList2,
  },
  // {
  //   quest: "Choose one or more races that you consider yourself to be:",
  //   key: "radio3",
  //   list: radioList3,
  // },
];
const radioListAll2 = [
  {
    quest:
      "What is your eagerness level to adopt new technologies?",
    key: "radio3",
    list: radioList3,
  },
  {
    quest:
      "What is your knowledge level in regard to social robots in smart cities?",
    key: "radio4",
    list: radioList4,
  },
  {
    quest:
      "Have you heard any stories about social robots assisting people on the road?",
    key: "radio5",
    list: radioList5,
  },
  {
    quest:
      "How much do you trust social robots?",
    key: "radio6",
    list: radioList6,
  },
  {
    quest:
      "How likely are you to cross the street at a designated crosswalk versus jaywalking when in a rush?",
    key: "radio7",
    list: radioList7,
  },
  {
    quest:
      "Would you consider accepting assistance from a humanoid assistant robot in your daily activities?",
    key: "radio8",
    list: radioList8,
  },
];
export default {
  name: "stepTwo",
  data() {
    return {
      radioListAll1,
      radioListAll2,
      isInputOthers: "",
      others: "",
      radioList1,
      radioList2,
      radioList3,
      radioList4,
      radioList5,
      others: "",
      form: {
        age: undefined,
        radio1: "",
        radio2: "",
        radio3: "",
        radio4: "",
        otherComments: "",
      },
      radioStyle: {
        display: "block",
      },
      labelCol: {
        xs: { span: 18 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 19 },
      },
    };
  },
  watch: {
    others(val) {
      if (val.length <= 0 && this.form.radio1 === "D. Self describe:") {
        this.isInputOthers = true;
      } else {
        this.isInputOthers = false;
      }
    },
    "form.radio1": {
      handler(val) {
        if (this.others.length <= 0 && val === "D. Self describe:") {
          this.isInputOthers = true;
        } else {
          this.isInputOthers = false;
        }
      },
    },
  },
  mounted() {},
  computed: {
    ...mapGetters(["gameStep", "allQuestionForm"]),
  },
  methods: {
    handleSubmit() {
      const that = this;
      this.$refs["form"].validate(async (valid) => {
        if (!valid && this.isInputOthers) return;
        //保存最后一次问卷
        that.$store.commit("SET_ALL_QUESTION_FORM", {
          ...that.allQuestionForm,
          last: { ...that.form },
        });
        const res = await api.submitForm(this.allQuestionForm);
        if (res.code === 200) {
          this.$message.success("Submitted successfully");
          this.$emit("changeLoading", false);
          that.$router.push("/last");
        } else {
          this.$emit("changeLoading", true);
          this.$message.error(res.message);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
::v-deep .ant-input {
  border: none !important;
  background: transparent;
  width: 100%;
  font-size: 18px;
}
::v-deep .ant-input:focus {
  box-shadow: none;
}
::v-deep .ant-form-item {
  margin-bottom: 0px;
}
::v-deep .ant-input-number {
  border: none !important;
  width: 100%;
}
::v-deep .ant-input-number:focus {
  box-shadow: none;
}
::v-deep .ant-input-number-handler-wrap {
  display: none;
}
::v-deep .ant-input-number-focused {
  box-shadow: none;
}
* {
  font-size: 18px;
  color: #737373;
}
.radio-check {
  background: #efefef;
  width: 500px;
  height: auto;
  white-space: pre-wrap;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  // text-align: center;
  ::v-deep .ant-radio {
    display: none;
  }
}

.radio-active {
  background: #1890ff;
  transition: background 0.2s ease-in-out;
}
.radio-active span {
  color: #fff !important;
}
.table-wrapper {
  border-bottom: 2px solid #efefef;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
</style>