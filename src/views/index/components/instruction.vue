<template>
  <div class="ins-wrapper">
    <strong>Introduction</strong>
    <br />
    <p>In the survey, you will complete <strong>two major tasks:</strong></p>
    <ol>
      <li>
        Complete a set of pre-study questions based on your previous experience.
      </li>
      <li>
        Experience <span style="color: red">two</span> first-person perspective
        games and complete a set of corresponding questions.
      </li>
    </ol>
    <br />
    <strong> Device Settings </strong>
    <br />
    <p>
      To obtain a smooth survey experience, we would require you to use a
      <strong>Computer with Fast and Stable Internet Connection</strong> so that
      games could be launched smoothly. Failing to do so may result in early
      terminations of the survey, with your response being invalid and
      ineligible for any reward. Please make sure that you access this survey
      from cloud research and complete the redirected cloud research website by
      the end of the survey to receive your reward.
    </p>
    <br />
    <strong> Inclusion Criteria: </strong>
    <br />
    <ol>
      <li>18 years or older.</li>
      <li>A fluent English speaker.</li>
      <li>Have auditory acuity (hearing aids are acceptable).</li>
      <li>Normal or corrected-to-normal vision.</li>
    </ol>
    <br />
    <strong> Exclusion Criteria: </strong>
    <br />
    <ol>
      <li>Known disorders or injuries that may affect your ability to use a computer tbdkeyboard, mouse, or video gamepad for up to 30 minutes at a time.</li>
    </ol>
    <p>
      <strong>
        If you failed to meet the Inclusion Criteria, exit the survey at this
        point.
      </strong>
    </p>
  </div>
</template>
<script>
export default {
  name: "instrustion",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.ins-wrapper {
  width: 60%;
  margin: 10px;
  .title {
    font-weight: bold;
    color: red;
  }
}
ol {
  list-style-type: demical;
  margin-left: 40px;
}
ol li {
  list-style-position: outside;
}
</style>