<template>
  <div class="ins-wrapper">
    <strong>Introduction</strong>
    <br />
    <p>In the survey, you will complete <strong>three major tasks:</strong></p>
    <ol>
      <li>
        Complete a set of pre-study questions based on your previous experience.
      </li>
      <li>
        Experience <span style="color: red">four</span> first-person perspective
        games and complete a set of corresponding questions after each game.
      </li>
      <li>
        Complete a set of post-study questions based on your general assessment
        of scenarios you experience in the games.
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
      <li>Currently resides in the United States.</li>
      <li>A fluent English speaker.</li>
      <li>
        Must have previous experience with Virtual Reality (VR) device or
        service.
      </li>
      <li>Have no severe motion sickness.</li>
    </ol>
    <br />
    <strong> Exclusion Criteria: </strong>
    <br />
    <ol>
      <li>Currently resides outside of the United States.</li>
      <li>
        Have no previous experience with Virtual Reality (VR) device or service.
      </li>
      <li>Have severe motion sickness.</li>
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