let centoCurrentIndex = 0;
const centoImages = document.querySelectorAll('.cento-carousel img');

function centoShowImage(index) {
    centoImages.forEach((img, i) => {
        img.classList.toggle('cento-active', i === index);
    });
}

function centoNextImage() {
    centoCurrentIndex = (centoCurrentIndex + 1) % centoImages.length;
    centoShowImage(centoCurrentIndex);
}

function centoPrevImage() {
    centoCurrentIndex = (centoCurrentIndex - 1 + centoImages.length) % centoImages.length;
    centoShowImage(centoCurrentIndex);
}

function centoOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('cento-overlay').style.display = 'flex';
    centoShowImage(centoCurrentIndex);
}

function centoCloseCarousel() {
    document.getElementById('cento-overlay').style.display = 'none';
}
