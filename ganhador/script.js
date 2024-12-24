let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

function openCarouselScreen() {
    document.getElementById('carouselScreen').style.display = 'flex';
    startCarousel();
}

function closeCarouselScreen() {
    document.getElementById('carouselScreen').style.display = 'none';
    stopCarousel();
}

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

let carouselInterval;

function startCarousel() {
    carouselInterval = setInterval(() => {
        nextImage();
    }, 3000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

