// JavaScript source code
// Select the button and the box elements
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');

let isAnimated = false;

animateBtn.addEventListener('click', () => {
    if (!isAnimated) {
        // Apply transform/animation via JavaScript classes or inline styles
        box.style.transform = 'rotate(360deg) scale(1.3)';
        box.style.backgroundColor = '#4caf50';
        isAnimated = true;
    } else {
        box.style.transform = 'rotate(0deg) scale(1)';
        box.style.backgroundColor = '#ff5722';
        isAnimated = false;
    }
});