export const useCountdownService = () => {
    const COUNTDOWN_LIMIT_IN_SECONDS = 0;
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_TO_FORMAT = 10;
    let countdownTimer: NodeJS.Timeout;

    const startCountdown = (countdownRestInSeconds: number, updateCallback: (value: number) => void) => {
        countdownTimer = setInterval(() => {
            countdownRestInSeconds--;
            updateCallback(countdownRestInSeconds);
            if (countdownRestInSeconds === COUNTDOWN_LIMIT_IN_SECONDS) {
                clearInterval(countdownTimer);
            }
        }, 1000);
    };

    const formatToMinutesAndSeconds = (countdownRestInSeconds: number) => {
        const minutes = Math.floor(countdownRestInSeconds / SECONDS_IN_MINUTE);
        const seconds = countdownRestInSeconds - minutes * SECONDS_IN_MINUTE;
        const formattedSeconds = seconds < SECONDS_TO_FORMAT ? `0${seconds}` : seconds;
        return `${minutes}:${formattedSeconds}`;
    };

    const stopCountdown = () => {
        clearInterval(countdownTimer);
    };

    return {
        formatToMinutesAndSeconds,
        startCountdown,
        stopCountdown,
    };
};
