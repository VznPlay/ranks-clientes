let cecuentaCurrentIndex = 0;
const cecuentaImages = document.querySelectorAll('.cecuenta-carousel img');

function cecuentaShowImage(index) {
    cecuentaImages.forEach((img, i) => {
        img.classList.toggle('cecuenta-active', i === index);
    });
}

function cecuentaNextImage() {
    cecuentaCurrentIndex = (cecuentaCurrentIndex + 1) % cecuentaImages.length;
    cecuentaShowImage(cecuentaCurrentIndex);
}

function cecuentaPrevImage() {
    cecuentaCurrentIndex = (cecuentaCurrentIndex - 1 + cecuentaImages.length) % cecuentaImages.length;
    cecuentaShowImage(cecuentaCurrentIndex);
}

function cecuentaOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('cecuenta-overlay').style.display = 'flex';
    cecuentaShowImage(cecuentaCurrentIndex);
}

function cecuentaCloseCarousel() {
    document.getElementById('cecuenta-overlay').style.display = 'none';
}
