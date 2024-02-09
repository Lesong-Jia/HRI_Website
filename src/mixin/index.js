import { mapGetters } from "vuex";

export default {
  mounted() {
  },
  computed: {
    ...mapGetters([
      "isPass",
      "gameStep",
      "quesStep",
      "gameGroupType",
      "gameArrList",
      "allQuestionForm",
    ]),
  },
  data() {
    return {

    };
  },
  methods: {
    toIndex() {
      console.log(111);
      if (this.isPass) {
        this.$router.push({ name: "index" });
      }
    },
    passUser() {
      this.$store.commit("SET_ALL_QUESTION_FORM", {});
      this.$store.commit("SET_GAME_STEP", "");
      this.$store.commit("SET_QUES_STEP", "");
      this.$store.commit("SET_IS_PASS", true);
      window.location.replace("https://app.cloudresearch.com/Router/ThankYouNotQualified")
    }
  }
};