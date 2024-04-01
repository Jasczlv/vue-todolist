const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: {
        todo: {
          text: "Fare esercizio",
          done: false,
        },
      },
    };
  },
});
