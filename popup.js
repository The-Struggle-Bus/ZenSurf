document.addEventListener('DOMContentLoaded', function () {

    // Get the "Extend" button element
    const extendButton = document.getElementById('extend-button');

    // Get the video element
    // const breatheVideo = document.getElementById('breathe-video');

    // Get the ambient sound element
    const ambientSound = document.getElementById('ambientSound');

    // Get the "Play" button element
    const playSoundButton = document.querySelector('.play-btn');

    const playPauseIcon = document.getElementById("playPauseIcon")

    //help toggle between play and pause
    let isPlaying = false;

     // Function to handle the "Extend" button click
     function openExtendOptions() {
        // Define the URL for the extend options page
        const extendOptionsUrl = 'extend.html';
        
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
    extendButton.addEventListener('click', openExtendOptions);

    // Add a mouseover event listener to start playing the video
    // playBreatheVideoButton.addEventListener('mouseover', playBreatheVideo);

    // Add a mouseout event listener to stop the video
    // playBreatheVideoButton.addEventListener('mouseout', pauseBreatheVideo);

   playSoundButton.addEventListener("click", toggleAmbientSound);
});
