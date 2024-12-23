let android_tvCurrentIndex = 0;
const android_tvImages = document.querySelectorAll('.android_tv-carousel img');

function android_tvShowImage(index) {
    android_tvImages.forEach((img, i) => {
        img.classList.toggle('android_tv-active', i === index);
    });
}

function android_tvNextImage() {
    android_tvCurrentIndex = (android_tvCurrentIndex + 1) % android_tvImages.length;
    android_tvShowImage(android_tvCurrentIndex);
}

function android_tvPrevImage() {
    android_tvCurrentIndex = (android_tvCurrentIndex - 1 + android_tvImages.length) % android_tvImages.length;
    android_tvShowImage(android_tvCurrentIndex);
}

function android_tvOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('android_tv-overlay').style.display = 'flex';
    android_tvShowImage(android_tvCurrentIndex);
}

function android_tvCloseCarousel() {
    document.getElementById('android_tv-overlay').style.display = 'none';
}
