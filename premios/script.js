        let currentIndex = 0;
        const images = document.querySelectorAll('.carousel img');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        function openCarousel(event) {
            event.preventDefault();
            document.getElementById('overlay').style.display = 'flex';
            showImage(currentIndex);
        }

        function closeCarousel() {
            document.getElementById('overlay').style.display = 'none';
        }
