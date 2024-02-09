<template>
  <div class="ins-wrapper">
    <p style="text-align: center">
      <strong> Consent Form </strong>
    </p>
    <p>
      We are asking you to participate in a research study titled “Understanding
      Privacy Attitudes in the Metaverse Across Contexts”. We will describe this
      study to you and answer any of your questions. This study is being led by
      a HCI research team of the School of Information Science at University of
      Pittsburgh.
    </p>
    <br />
    <strong> Study Aims: </strong>
    <p>
      The purpose of this study is to measure participants’ subjective
      behaviors, personal data disclosure intentions and decision, and attitudes
      towards privacy policy and potential privacy risks of Virtual Reality
      Applications.
    </p>
    <br />
    <strong> Study Procedures: </strong>
    <p>
      In the study you will be asked to perform the three following tasks:<br />
    </p>
    <ol>
      <li>
        Complete a series of pre-game survey questions, which assess your
        general attitudes towards the data collection and privacy policy of
        Virtual Reality Platforms.
      </li>
      <li>
        Experience an adversarial game or watch videos which present different
        privacy-related scenarios. These scenarios simulate real-life privacy
        challenges you may have encountered while using Virtual Reality
        services.
      </li>
      <li>
        3.Complete a series of post-game survey questions, which assess your
        attitudes, and privacy disclosure decisions towards each scenario.
      </li>
    </ol>
    The duration of the study should be approximately 30 minutes.<br />
    <br />
    <strong> Risks and Discomforts: </strong>
    <p>
      We anticipate that your participation in this study presents no greater
      risk than everyday use of the Internet.
    </p>

    <br />
    <strong> Benefits: </strong>
    <p>
      Information collected during the study would contribute to address user
      privacy challenges and concerns and to further foster the trust and
      responsible use of Virtual Reality applications.
    </p>
    <br />
    <strong> Incentives for participation: </strong>
    <p>You will be compensated with $3 for the 30 minutes study.</p>

    <br />
    <strong> Privacy, Confidentiality, and Data Security: </strong>
    <p>
      We will do our best to keep your participation in this research study
      confidential to the extent permitted by law; however, it is possible that
      other organizations may need to review the research records in this study.
      For example, the following organization may check and copy records about
      this research:
    </p>
    <ul>
      <li>
        University of Pittsburgh’s Institutional Review Board (a committee that
        reviews and approves research studies) and the Human Research Protection
        Office. Sensitive research data with identifiers might be stored in the
        cloud or servers, or transmitted through the internet. Your
        confidentiality will be kept to the degree permitted by the technology
        being used. We cannot guarantee against interception of data sent via
        the internet by third parties.
      </li>
    </ul>
    <p>
      In general, we anticipate that your participation in this survey presents
      no greater risk than everyday use of the Internet.
    </p>
    <br />
    <strong> Voluntary Participation: </strong>
    <p>
      Completing all research material is required to be counted for valid
      participation and there would be no compensation earned if withdrawn from
      the study. However, your participation in the study is completely
      voluntary. You have the right to withdraw from the study at any stage and
      without any consequence.
    </p>
    <br />
    <strong> Questions and Concerns: </strong>
    <p>
      You may contact the research team at
      <span style="text-decoration: underline"
        ><a href="mailto:bey14@pitt.edu" target="_parent"
          >bey14@pitt.edu</a
        ></span
      >
      for additional information.
    </p>
    <br />
    <strong> Consent to Participate: </strong>
    <p>
      The above information has been explained to me and all my current
      questions have been answered. I understand that I am encouraged to ask
      questions, voice concerns or complaints about any part of this research
      study during this study. Any future questions, concerns or complaints will
      be answered by a qualified individual or by the investigator(s) listed
      above at the email address given. I understand that I may always request
      that my questions, concerns or complaints be addressed by a listed
      investigator. I understand that I may contact the Human Subjects
      Protection Advocate of the Human Research Protection office, University of
      Pittsburgh (1-866-212-2668) to discuss problems, concerns, and questions;
      obtain information; offer input; or discuss situations that occurred
      during my participation.
    </p>
    <br />
    <p>
      If you would like to participate, click the button to proceed to the
      online study.
    </p>
  </div>
</template>
<script>
export default {
  name: "consent",
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
  display: block;
  list-style-type: decimal;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
ul {
  margin-left: 20px;
  li {
    display: list-item !important;
    text-align: -webkit-match-parent;
  }
}
ol {
  list-style-type: demical;
}
ol li {
  list-style-position: outside;
}
</style>