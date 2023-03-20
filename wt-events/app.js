let images = document.querySelectorAll("#slider img");
let currentImageIndex = 0;
let interval = setInterval(nextImage, 3000);

function nextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}