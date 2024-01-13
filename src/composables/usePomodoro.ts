import { ref } from "vue";

export const usePomodoro = (pomodoroTimeInitialize: number) => {
  const pomodoroTime = ref(pomodoroTimeInitialize);

  const startCountdown = () => {
    const timer = setInterval(() => {
      pomodoroTime.value--;
      if (pomodoroTime.value === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const resetCountdown = () => {
    pomodoroTime.value = pomodoroTimeInitialize;
  };

  return {
    pomodoroTime,
    resetCountdown,
    startCountdown,
  };
};
