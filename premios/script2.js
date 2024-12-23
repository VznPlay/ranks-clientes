let amazonCurrentIndex = 0;
const amazonImages = document.querySelectorAll('.amazon-carousel img');

function amazonShowImage(index) {
    amazonImages.forEach((img, i) => {
        img.classList.toggle('amazon-active', i === index);
    });
}

function amazonNextImage() {
    amazonCurrentIndex = (amazonCurrentIndex + 1) % amazonImages.length;
    amazonShowImage(amazonCurrentIndex);
}

function amazonPrevImage() {
    amazonCurrentIndex = (amazonCurrentIndex - 1 + amazonImages.length) % amazonImages.length;
    amazonShowImage(amazonCurrentIndex);
}

function amazonOpenCarousel(event) {
    event.preventDefault();
    document.getElementById('amazon-overlay').style.display = 'flex';
    amazonShowImage(amazonCurrentIndex);
}

function amazonCloseCarousel() {
    document.getElementById('amazon-overlay').style.display = 'none';
}
