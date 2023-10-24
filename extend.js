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
prevVisualButton.addEventListener("click", function() {
  plusSlidesVisual(-1);
});

nextVisualButton.addEventListener("click", function() {
  plusSlidesVisual(1);
});

prevMovementButton.addEventListener("click", function() {
  plusSlidesMovement(-1);
});

nextMovementButton.addEventListener("click", function() {
  plusSlidesMovement(1);
});


// Add an event listener to the feedback button
document
  .getElementById("feedback")
  .addEventListener("click", function () {
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