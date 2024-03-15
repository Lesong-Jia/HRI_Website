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
      <p class="line-p"></p>
      <div
        style="margin: 20px 0px"
        v-for="radioList in radioListAll1"
        :key="radioList.key"
      >
        <p class="require-radio">{{ radioList.quest }}</p>
        <img src="/Image/image1.png" alt="Description" style="max-width: 50%; height: auto;">
        <br><br>
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

      <div
        style="margin: 20px 0px"
        v-for="radioList in radioListAll2"
        :key="radioList.key"
      >
        <p class="require-radio">{{ radioList.quest }}</p>
        <img src="/Image/image2.png" alt="Description" style="max-width: 50%; height: auto;">
        <br><br>
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
} from "../tool";

const radioListAll1 = [
  {
    quest: "How much do you think the robot's emotion regulation conversation below affected your decision to accept its suggestions in the amusement park scenario?",
    key: "radio1",
    list: radioList1,
  },
];
const radioListAll2 = [
  {
    quest: "How much do you think the robot's emotion regulation conversation below affects your decision to accept its suggestions in the soccer game scenario?",
    key: "radio2",
    list: radioList2,
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
      others: "",
      form: {
        radio1: "",
        radio2: "",
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
  mounted() {},
  computed: {
    ...mapGetters(["gameStep", "allQuestionForm"]),
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