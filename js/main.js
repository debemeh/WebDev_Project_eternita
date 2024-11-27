const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

window.addEventListener('resize', updateCarousel);
