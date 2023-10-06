document.addEventListener('DOMContentLoaded', function () {

    // Get the "Extend" button element
    const extendButton = document.getElementById('extend-button');

    // Get the video element
    const breatheVideo = document.getElementById('breathe-video');

    // Get the ambient sound element
    const ambientSound = document.getElementById('ambientSound-audio');

    // Get the "Play" button element
    const playSoundButton = document.getElementById('play-sound-button');

     // Function to handle the "Extend" button click
     function openExtendOptions() {
        // Define the URL for the extend options page
        const extendOptionsUrl = 'extend.html';
        
        // Open a new tab with the extend options page
        chrome.tabs.create({ url: extendOptionsUrl });
    }

    // Function to play the ambient sound
    function playAmbientSound() {
        ambientSound.play();
    }

    // Function to stop the ambient sound
    function stopAmbientSound() {
        ambientSound.pause();
        ambientSound.currentTime = 0; // Reset the audio to the beginning
    }

    // Add a click event listener to the "Extend" button
    extendButton.addEventListener('click', openExtendOptions);

    // Add a mouseover event listener to start playing the video
    playBreatheVideoButton.addEventListener('mouseover', playBreatheVideo);

    // Add a mouseout event listener to stop the video
    playBreatheVideoButton.addEventListener('mouseout', pauseBreatheVideo);

    // Add a mouseover event listener to start playing the sound when the button is clicked
    playSoundButton.addEventListener('click', playAmbientSound);

    // Add a mouseout event listener to stop the sound when the button is clicked
    playSoundButton.addEventListener('click', stopAmbientSound);
});
