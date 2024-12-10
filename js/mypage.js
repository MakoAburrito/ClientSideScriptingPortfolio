/*reference videos : 
data attributes: https://youtube.com/shorts/C91abBbZkq8?si=OPzW1JIFAZ0FIgih
                 https://www.youtube.com/watch?v=owFCgbFhaBE
*/
document.querySelectorAll('.moving-button').forEach(button => {
    let isGif1Visible = true; // Track the state of each button individually

    button.addEventListener('click', () => {
        const gif = button.querySelector('.gif');
        const audio = button.querySelector('.audio');

        // Get the data attributes
        const gif1 = button.getAttribute('data-gif1');
        const gif2 = button.getAttribute('data-gif2');
        const audioSrc = button.getAttribute('data-audio');

        // Toggle images and audio
        if (isGif1Visible) {
            gif.src = gif2; // Switch to the second gif
            audio.src = audioSrc; // Set the audio source
            audio.play(); // Play audio
        } else {
            gif.src = gif1; // Switch back to the first gif
            audio.pause(); // Pause audio
            audio.currentTime = 0; // Reset audio
        }
        
        isGif1Visible = !isGif1Visible; // Toggle states true to false to switch buttons on an off
    });
});

