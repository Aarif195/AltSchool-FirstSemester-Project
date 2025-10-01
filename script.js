// Select DOM elements
const display = document.querySelector("p");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");

// Initialize time variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

// Function to update the timer display
function updateDisplay() {
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

// Start the stopwatch
function startTimer() {
  if (interval) return; // Prevent multiple intervals
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

// Stop the stopwatch
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

// Reset the stopwatch
function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Event listeners for buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();


// Select the toggle button
const themeToggleBtn = document.querySelector('.themeToggleBtn');

// Toggle theme function
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  document.querySelector('.start-stop').classList.toggle('light-theme');
  document.querySelector('.startBtn').classList.toggle('light-theme');
  document.querySelector('.stopBtn').classList.toggle('light-theme');
  document.querySelector('.resetBtn').classList.toggle('light-theme');
}

// Add event listener
themeToggleBtn.addEventListener('click', toggleTheme);
