let text1 = document.getElementById("home-text-animate").textContent; // Get the text from the element
let word = text1; // Store the text content for animation
let part = '',
    i = 0,
    offset = 0,
    forwards = true,
    skip_count = 0,
    skip_delay = 15, // How long to pause before reversing
    speed = 100;     // Speed of typing/erasing

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      // Typing forward
      if (offset >= word.length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false; // Start erasing after the delay
          skip_count = 0;
        }
      }
    } else {
      // Erasing
      if (offset === 0) {
        forwards = true; // Start typing again when erased
      }
    }

    // Extract the current portion of the word to display
    part = word.substring(0, offset);

    // Adjust offset based on typing/erasing direction
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }

    // Update only the text, not the element itself (CSS stays intact)
    document.getElementById("home-text-animate").textContent = part;
  }, speed); // Set interval speed
};

// Start the animation when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  wordflick();
});
