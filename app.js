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
    removeGoal(availableGoal) {
      this.goals = this.goals.filter((goal) => {
        return availableGoal !== goal;
      });
      console.log(this.goals);
    },
  },
});

app.mount("#user-goals");
