let customCurrentIndex = 0;
const customImages = document.querySelectorAll('.custom-carousel img');

function customShowImage(index) {
    customImages.forEach((img, i) => {
        img.classList.toggle('custom-active', i === index);
    });
}

function customNextImage() {
    customCurrentIndex = (customCurrentIndex + 1) % customImages.length;
    customShowImage(customCurrentIndex);
}

function customPrevImage() {
    customCurrentIndex = (customCurrentIndex - 1 + customImages.length) % customImages.length;
    customShowImage(customCurrentIndex);
}

function customOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('custom-overlay').style.display = 'flex';
    customShowImage(customCurrentIndex);
}

function customCloseCarousel() {
    document.getElementById('custom-overlay').style.display = 'none';
}
