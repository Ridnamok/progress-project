const circle = document.querySelector('.progress-value');/*Этот нерабочий код отвечает за анимацию заполнения круга */
const circleLength = 2 * Math.PI * 42;
const duration = 10000;
const startTime = performance.now();
function animateProgress(currentTime) {
    const progress = Math.min(
        (currentTime - startTime) / duration,
        1
    )
    const offset = circleLength * (1 - progress);
    circle.style.strokeDashoffset = offset;
    if (progress < 1) {
        requestAnimationFrame(animateProgress);
    }
}
requestAnimationFrame(animateProgress);