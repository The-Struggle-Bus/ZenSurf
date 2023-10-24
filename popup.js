document.addEventListener("DOMContentLoaded", function () {
  // Get the "Extend" button element
  const extendButton = document.getElementById("extend-button");

  // Get the ambient sound element
  const ambientSound = document.getElementById("ambientSound");

  // Get the "Play" button element
  const playSoundButton = document.querySelector(".play-btn");

  const playPauseIcon = document.getElementById("playPauseIcon");

  //help toggle between play and pause
  let isPlaying = false;

  // timer stuff
  let minutes = 0;
  let seconds = 0;
  let timerInterval;
  // Get the timer clickable area and the "Ready" text
  const timerClickable = document.getElementById("timerClickable");
  const readyText = document.getElementById("readyText");
  // starts countdown
  function adjustTime(type, action) {
    if (type === "minutes") {
      if (action === "increase" && minutes < 2) {
        minutes++;
      } else if ((action === "decrease") & (minutes > 0)) {
        minutes--;
      }
    } else if (type === "seconds") {
      if (action === "increase" && seconds < 59) {
        seconds++;
      } else if (action === "decrease" && seconds > 0) {
        seconds--;
      }
    }
    displayTime();
  }
  // displays adjusted time
  function displayTime() {
    document.getElementById("minutes-display").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds-display").innerText = seconds
      .toString()
      .padStart(2, "0");
  }
  // Function to start the countdown
  function startTimer() {
    clearInterval(timerInterval); // Clear any existing interval to avoid overlaps

    timerInterval = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(timerInterval);
        playSound();
        return;
      }

      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      displayTime();
    }, 1000);
  }

  // Function to play a sound when the timer reaches 0
  function playSound() {
    const audio = new Audio("audio/TimerSound.mp3");
    audio.play();
  }
  // Adding the "ready" button and its functionality:

  // Timer settings: ready/reset button

  function resetTimer() {
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    displayTime();
    readyButton.textContent = "Ready";
  }

  const readyButton = document.createElement("button");
  readyButton.className = "ready-btn";
  readyButton.textContent = "Ready";
  readyButton.onclick = function () {
    if (readyButton.textContent === "Ready") {
      startTimer();
      readyButton.textContent = "Reset";
    } else {
      resetTimer();
    }
  };
  document.querySelector(".timer-container").appendChild(readyButton);

  // ---------------------------------------------------------------------------------------------//
  // Function to handle the "Extend" button click
  function openExtendOptions() {
    // Define the URL for the extend options page
    const extendOptionsUrl = "extend.html";

    // Open a new tab with the extend options page
    chrome.tabs.create({ url: extendOptionsUrl });
  }

  function toggleAmbientSound() {
    if (isPlaying) {
      ambientSound.pause();
      playPauseIcon.src = "images/Play.png";
    } else {
      ambientSound.play();
      playPauseIcon.src = "images/Pause.png";
    }
    isPlaying = !isPlaying; // toggle the flag
  }

  // Add a click event listener to the "Extend" button
  extendButton.addEventListener("click", openExtendOptions);

  playSoundButton.addEventListener("click", toggleAmbientSound);
  document
    .querySelector(".arrow-up.left-arrow")
    .addEventListener("click", () => adjustTime("minutes", "increase"));
  document
    .querySelector(".arrow-up.right-arrow")
    .addEventListener("click", () => adjustTime("seconds", "increase"));
  document
    .querySelector(".arrow-down.left-arrow")
    .addEventListener("click", () => adjustTime("minutes", "decrease"));
  document
    .querySelector(".arrow-down.right-arrow")
    .addEventListener("click", () => adjustTime("seconds", "decrease"));
});

// Add event listeners to the "Breathe" container
const breatheContainer = document.querySelector(".breathe");

const video = document.querySelector(".breathe-video");

breatheContainer.addEventListener("mouseenter", () => {
  video.play();
});

breatheContainer.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0;
});
