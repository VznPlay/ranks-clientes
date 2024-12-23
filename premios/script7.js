let dozentoCurrentIndex = 0;
const dozentoImages = document.querySelectorAll('.dozento-carousel img');

function dozentoShowImage(index) {
    dozentoImages.forEach((img, i) => {
        img.classList.toggle('dozento-active', i === index);
    });
}

function dozentoNextImage() {
    dozentoCurrentIndex = (dozentoCurrentIndex + 1) % dozentoImages.length;
    dozentoShowImage(dozentoCurrentIndex);
}

function dozentoPrevImage() {
    dozentoCurrentIndex = (dozentoCurrentIndex - 1 + dozentoImages.length) % dozentoImages.length;
    dozentoShowImage(dozentoCurrentIndex);
}

function dozentoOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('dozento-overlay').style.display = 'flex';
    dozentoShowImage(dozentoCurrentIndex);
}

function dozentoCloseCarousel() {
    document.getElementById('dozento-overlay').style.display = 'none';
}
