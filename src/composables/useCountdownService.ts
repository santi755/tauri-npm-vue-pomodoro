export const useCountdownService = () => {
  let timer: NodeJS.Timeout;

  const startCountdown = (countdownRestInSeconds: number, updateCallback: (value: number) => void) => {
    timer = setInterval(() => {
      countdownRestInSeconds--;
      updateCallback(countdownRestInSeconds);
      if (countdownRestInSeconds === 0) {
        clearInterval(timer);
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
    clearInterval(timer);
  }

  return {
    formatToMinutesAndSeconds,
    startCountdown,
    stopCountdown
  };
};
