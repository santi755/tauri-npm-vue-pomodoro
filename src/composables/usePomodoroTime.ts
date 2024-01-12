import { ref } from "vue";

export const usePomodoroTime = (pomodoroTimeInitialize: number) => {
  const pomodoroTime = ref(pomodoroTimeInitialize);

  const startCountdown = () => {
    const timer = setInterval(() => {
      pomodoroTime.value--;
      if (pomodoroTime.value === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  return {
    pomodoroTime,
    startCountdown,
  };
};
