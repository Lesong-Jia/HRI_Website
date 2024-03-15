<template>
  <div>
    <p><strong>Part 3 - Post-study Questions:</strong></p>
    <p>
      Please response to the following questions based on <strong
        >your experience and assessment of All the Scenarios</strong
      > you have completed in this study.
    </p>
    <a-form-model
      ref="form"
      :model="form"
      @submit="handleSubmit"
      @submit.native.prevent
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <p></p>
      <!-- 打分题 -->
      <table border="0" width="100%" align="center">
        <tr class="head">
          <td style="border-right: 1px solid #efefef"></td>
          <td v-for="headItem in headList" :key="headItem">
            {{ headItem }}
          </td>
        </tr>
        <tr v-for="(item, index) in questList" :key="index">
          <a-form-model-item
            :prop="'table.' + item.key"
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
            v-for="(radioItem, radioIndex) in headList"
            :key="radioItem + radioIndex"
          >
            <a-radio
              :style="radioStyle"
              :value="radioItem"
              @click="checkRadio(radioIndex + 1, item.key)"
              :checked="form['table'][item.key] == radioIndex + 1"
            />
          </td>
        </tr>
      </table>
    </a-form-model>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import api from "@/api/index.js";
import { questList } from "../tool";
import { headList1 } from "../../startQuestionnaire/tool";
export default {
  name: "stepOne",
  data() {
    return {
      headList: headList1,
      questList,
      others: "",
      form: {
        table: {},
      },
      rulles: {},
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
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
  methods: {
    handleSubmit() {
      const that = this;
      this.$refs["form"].validate(async (valid) => {
        if (!valid) {
          return;
        }
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
    checkRadio(item, key) {
      this.$set(this.form.table, key, item);
    },
  },
};
</script>
<style lang="less" scoped>
::v-deep .ant-input {
  border: none !important;
  width: 100%;
}
::v-deep .ant-input:focus {
  box-shadow: none;
}
</style>