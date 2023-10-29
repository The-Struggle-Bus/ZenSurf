// ------------------------------Visual and Movement ----------------------------

// Find the button element by its id
const prevVisualButton = document.getElementById("prevVisualButton");
const nextVisualButton = document.getElementById("nextVisualButton");
const prevMovementButton = document.getElementById("prevMovementButton");
const nextMovementButton = document.getElementById("nextMovementButton");

// script for slideshow of visuals and movement
let slideIndexVisual = 1;
let slideIndexMovement = 1;

// Navigate to next or previous slide for Visuals
function plusSlidesVisual(n) {
  slideIndexVisual += n;
  if (slideIndexVisual > 5) {
    slideIndexVisual = 1; // Loop back to the first slide
  }
  if (slideIndexVisual < 1) {
    slideIndexVisual = 5; // Loop to the last slide
  }
  showSlides("mySlidesVisual", slideIndexVisual);
}

// Navigate to next or previous slide for Movements
function plusSlidesMovement(n) {
  slideIndexMovement += n;
  if (slideIndexMovement > 4) {
    slideIndexMovement = 1; // Loop back to the first slide
  }
  if (slideIndexMovement < 1) {
    slideIndexMovement = 4; // Loop to the last slide
  }
  showSlides("mySlidesMovement", slideIndexMovement);
}

// Show a specific slide
function showSlides(slideshowId, slideIndex) {
  let slides = document.getElementsByClassName(slideshowId);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Initialize the first slides
document.addEventListener("DOMContentLoaded", function () {
  showSlides("mySlidesVisual", slideIndexVisual);
  showSlides("mySlidesMovement", slideIndexMovement);
});

// Add an event listener to handle the click event
prevVisualButton.addEventListener("click", function () {
  plusSlidesVisual(-1);
});

nextVisualButton.addEventListener("click", function () {
  plusSlidesVisual(1);
});

prevMovementButton.addEventListener("click", function () {
  plusSlidesMovement(-1);
});

nextMovementButton.addEventListener("click", function () {
  plusSlidesMovement(1);
});

// --------------------------------Quote-------------------------------------
// Array of quote image sources
const quoteImages = [
  "quote1.png",
  "quote2.png",
  "quote3.png",
  "quote4.png",
  "quote5.png",
  "quote6.png",
  "quote7.png",
  "quote8.png",
  "quote9.png",
  "quote10.png",
  "quote11.png",
  "quote12.png",
];

// Get the button element by its id
const quoteButton = document.getElementById("quoteButton");
// Handle the click event here, change the quote image
const quoteImage = document.getElementById("quoteImage");
// Get the current date
const currentDate = new Date().toDateString();

// Get One Quote
function SelectDailyQuote() {
  // Check if a quote has been selected today
  const selectedDate = localStorage.getItem("selectedDate");

  if (selectedDate === currentDate) {
    // A quote has already been selected today, display it
    quoteImage.src = "images/" + localStorage.getItem("selectedQuote");
  } else {
    // It's a new day, select and display a new quote
    const randomImageNumber = Math.floor(Math.random() * quoteImages.length);
    const selectedQuote = quoteImages[randomImageNumber];
    quoteImage.src = "images/" + selectedQuote;

    // Store the selected quote and date in local storage
    localStorage.setItem("selectedQuote", selectedQuote);
    localStorage.setItem("selectedDate", currentDate);
  }

  // Disable the button once a quote is displayed
  quoteButton.disabled = true;
  // Change the cursor style
  quoteButton.style.cursor = "not-allowed";
}

// Add a click event listener
quoteButton.addEventListener("click", function () {
  SelectDailyQuote();
});

// --------------------------Podcast Play/Pause Button ------------------------

const podcastSound = document.getElementById("podcastSound");

// Get the "Play" button element
const playSoundButton = document.querySelector(".play-sound-btn");

const playPauseIcon = document.getElementById("playPauseIcon");
let isPlaying = false;

function togglePodcastSound() {
  if (isPlaying) {
    podcastSound.pause();
    playPauseIcon.src = "images/Play.png";
  } else {
    podcastSound.play();
    playPauseIcon.src = "images/Pause.png";
  }
  isPlaying = !isPlaying; // toggle the flag
}
playSoundButton.addEventListener("click", togglePodcastSound);
// ---------------------------------Feedback-----------------------------------
// Add an event listener to the feedback button
document.getElementById("feedback").addEventListener("click", function () {
  toggleFeedbackPopup();
});

document.getElementById("cancel").addEventListener("click", function () {
  toggleFeedbackPopup();
});

function toggleFeedbackPopup() {
  var feedbackPopup = document.getElementById("feedbackPopup");
  feedbackPopup.classList.toggle("hidden");
}

function submitFeedback() {
  var feedbackText = document.getElementById("feedbackText").value;
  // Add your code to submit the feedback here
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      var formData = new FormData(this);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      alert("Thank you for your feedback!");
    });
}
