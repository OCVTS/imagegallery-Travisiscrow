//Select all images in the gallery
const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages); // convert nodeList to array
// Select elements for the lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0; // Track the currently displayed image

// open lightbox and synchronize currentIndex when an image is clicked
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    });
});

// Close lightbox when clicking outside the content
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
    lightbox.classList.remove('visible');
    }
});

// show next image in the lightbox
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});


// show previous image in the lightbox
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});


// Keyboard nagigation for the lightbox
document.addEventListener('keydown', (event) =>{
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (event.key === 'Escape') {
        lightbox.classList.remove('visible');
    }
});
