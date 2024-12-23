let trezeCurrentIndex = 0;
const trezeImages = document.querySelectorAll('.treze-carousel img');

function trezeShowImage(index) {
    trezeImages.forEach((img, i) => {
        img.classList.toggle('treze-active', i === index);
    });
}

function trezeNextImage() {
    trezeCurrentIndex = (trezeCurrentIndex + 1) % trezeImages.length;
    trezeShowImage(trezeCurrentIndex);
}

function trezePrevImage() {
    trezeCurrentIndex = (trezeCurrentIndex - 1 + trezeImages.length) % trezeImages.length;
    trezeShowImage(trezeCurrentIndex);
}

function trezeOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('treze-overlay').style.display = 'flex';
    trezeShowImage(trezeCurrentIndex);
}

function trezeCloseCarousel() {
    document.getElementById('treze-overlay').style.display = 'none';
}
