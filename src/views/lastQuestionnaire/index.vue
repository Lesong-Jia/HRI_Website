<template>
  <div class="wrapper">
    <div class="content">
      <stepOne ref="stepOne" v-if="active === 2" />
      <stepTwo ref="stepTwo" v-if="active === 1" />
    </div>
    <div class="input-wrapper">
      <a-button
        type="primary"
        shape="round"
        :disabled="loading"
        :loading="loading"
        @click="handleSubmit"
      >
        {{ active === 1 ? "Next" : "Next" }}
      </a-button>
    </div>
  </div>
</template>
<script>
import api from "@/api/index.js";
import stepOne from "./components/stepOne.vue";
import stepTwo from "./components/stepTwo.vue";
import moment from "moment";
export default {
  name: "last",
  components: { stepOne, stepTwo },
  data() {
    return {
      loading: false,
      active: 1,
      form: {},
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
  mounted() {
    window.scrollTo(0, 0);
  },
  watch: {
    active(val) {
      window.scrollTo(0, 0);
    },
  },
  methods: {
    handleSubmit() {
      const that = this;
      if (this.active === 1) {
        this.$refs.stepTwo.$refs["form"].validate(async (valid) => {
          if (!valid) {
            return;
          }
          if (this.$refs.stepTwo.isInputOthers) {
            return;
          }
          if (this.$refs.stepTwo.form.radio1 === "D. Self describe:") {
            this.$refs.stepTwo.form.radio1 =
              this.$refs.stepTwo.form.radio1 + this.$refs.stepTwo.others;
          }
          this.form = { ...this.form, ...this.$refs.stepTwo.form };
          that.$store.commit("SET_ALL_QUESTION_FORM", {
            ...that.allQuestionForm,
            lastQuestionnaire: { ...that.form },
            // endTime: moment().format("YYYY-MM-DD HH:mm:ss"),
          });
          this.$router.push("/startQuestionnaire");
          
        // this.$refs.stepOne.$refs["form"].validate(async (valid) => {
        //   if (!valid) {
        //     return;
        //   }
        //   this.form = { ...this.form, ...this.$refs.stepOne.form };
          this.active = 2;
        });
      } else {
          this.$refs.stepOne.$refs["form"].validate(async (valid) => {
            if (!valid) {
              return;
            }
            this.form = { ...this.form, ...this.$refs.stepOne.form };
        // this.$refs.stepTwo.$refs["form"].validate(async (valid) => {
        //   if (!valid) {
        //     return;
        //   }
        //   if (this.$refs.stepTwo.isInputOthers) {
        //     return;
        //   }
        //   if (this.$refs.stepTwo.form.radio1 === "D. Self describe:") {
        //     this.$refs.stepTwo.form.radio1 =
        //       this.$refs.stepTwo.form.radio1 + this.$refs.stepTwo.others;
        //   }
        //   this.form = { ...this.form, ...this.$refs.stepTwo.form };
          
          //保存最后一次问卷
          that.$store.commit("SET_ALL_QUESTION_FORM", {
            ...that.allQuestionForm,
            lastQuestionnaire: { ...that.form },
            endTime: moment().format("YYYY-MM-DD HH:mm:ss"),
          });
          // that.loading = true;
          // const res = await api.submitForm({
          //   ...that.allQuestionForm,
          //   index: this.gameGroupType,
          // });
          // if (res.code === 200) {
          //   that.$message.success("Submitted successfully");
          //   this.$store.commit("SET_ALL_QUESTION_FORM", {});
          //   this.$store.commit("SET_GAME_STEP", "");
          //   this.$store.commit("SET_QUES_STEP", "");
          //   this.$store.commit("SET_IS_PASS", true);
          //   window.location.replace(
          //     "https://connect.cloudresearch.com/participant/project/3f07c8e99a444971a2c7b16de468d483/complete"
          //   );
          // } else {
          //   that.loading = false;
          //   that.$message.error(res.message);
          // }
        });
      }
    },
    checkRadio(item, key) {
      this.$set(this.form, key, item);
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
.wrapper {
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  .content {
    padding: 20px 8%;
  }
}
</style>