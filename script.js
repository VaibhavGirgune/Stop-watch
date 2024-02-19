let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;
let timerInterval = null;
const timerDisplay = document.querySelector(".timer-display");

function startTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(updateTimer, 10);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    milliseconds = seconds = minutes = hours = 0;
    updateDisplay();
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime =
        pad(hours) + " : " +
        pad(minutes) + " : " +
        pad(seconds) + " : " +
        pad(milliseconds);
    timerDisplay.textContent = formattedTime;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}

document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("pause-timer").addEventListener("click", pauseTimer);
document.getElementById("reset-timer").addEventListener("click", resetTimer);
