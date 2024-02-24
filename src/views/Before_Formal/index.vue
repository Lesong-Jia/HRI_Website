<template>
  <div class="wrapper">
    <div class="pre-study">
      <p><strong>Congratulations on completing the tutorial. Next, the formal experiment will begin. 
        <br>
        <br>
        In the formal experiment, before each game starts, a video will be presented to you. 
        <br>
        <br>
        After the video finishes playing and the game has loaded, you can start the game by clicking the "Start" button. 
        <br>
        <br>
        <span style="color: red;">Please note that depending on your internet speed, the game loading time may vary between 10 seconds to 1 minute, so please be patient.</span>
      </strong></p>
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

import api from "@/api/index.js";

export default {
  mixins: [preventBack], //注入  阻止返回上一页
  data() {
    return {
      loading: false,
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
  },
  created() {
    this.toIndex();
  },
  methods: {
    handleSubmit() {
      this.$router.push("/gameExperience");
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