let celularCurrentIndex = 0;
const celularImages = document.querySelectorAll('.celular-carousel img');

function celularShowImage(index) {
    celularImages.forEach((img, i) => {
        img.classList.toggle('celular-active', i === index);
    });
}

function celularNextImage() {
    celularCurrentIndex = (celularCurrentIndex + 1) % celularImages.length;
    celularShowImage(celularCurrentIndex);
}

function celularPrevImage() {
    celularCurrentIndex = (celularCurrentIndex - 1 + celularImages.length) % celularImages.length;
    celularShowImage(celularCurrentIndex);
}

function celularOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('celular-overlay').style.display = 'flex';
    celularShowImage(celularCurrentIndex);
}

function celularCloseCarousel() {
    document.getElementById('celular-overlay').style.display = 'none';
}
