// script.js
const textToSlide = document.getElementById('textToSlide');
const textArray = ['Copyright 2024, Dekbangtlez. All right reserved'];

let currentIndex = 0;

function updateText() {
    textToSlide.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(updateText, 800); // Change text every 3 seconds