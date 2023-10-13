// You can add JavaScript code for displaying meditative quotes, calming visuals,
// podcast player, and yoga poses slideshow here.

function toggleFeedbackPopup() {
    var feedbackPopup = document.getElementById("feedbackPopup");
    feedbackPopup.classList.toggle("hidden");
}

function submitFeedback() {
    var feedbackText = document.getElementById("feedbackText").value;
    // Add your code to submit the feedback here
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var formData = new FormData(this);
      
        for (var pair of formData.entries()) {
          console.log(pair[0] + ": " + pair[1]);
        }
        alert("Thank you for your feedback!");
      });
}


var playButton = document.getElementById("playButton");
var audioPlayer = document.getElementById("audioPlayer");

// Add a click event listener to the play button
playButton.addEventListener("click", function() {
  // Play the audio
  audioPlayer.play();
});
