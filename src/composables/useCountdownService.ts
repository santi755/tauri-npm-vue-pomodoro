export const useCountdownService = () => {
  let countdownTimer: NodeJS.Timeout;

  const startCountdown = (countdownRestInSeconds: number, updateCallback: (value: number) => void) => {
    countdownTimer = setInterval(() => {
      countdownRestInSeconds--;
      updateCallback(countdownRestInSeconds);
      if (countdownRestInSeconds === 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);
  };

  const formatToMinutesAndSeconds = (countdownRestInSeconds: number) => {
    const minutes = Math.floor(countdownRestInSeconds / 60);
    const seconds = countdownRestInSeconds - minutes * 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  };

  const stopCountdown = () => {
    clearInterval(countdownTimer);
  }

  return {
    formatToMinutesAndSeconds,
    startCountdown,
    stopCountdown
  };
};
