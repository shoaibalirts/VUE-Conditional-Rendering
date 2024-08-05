const app = Vue.createApp({
  data() {
    return {
      inputGoal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
      console.log(this.goals);
      this.inputGoal = "";
    },
  },
});

app.mount("#user-goals");
