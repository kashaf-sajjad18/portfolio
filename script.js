document.addEventListener("DOMContentLoaded", () => {
  const sliderImages = [
    "evm.jpg",
    "ems.jpg",
    "portfolio.jpg"
  ];

  const projectImage = document.getElementById("project-image");
  let currentIndex = 0;

  function showNextImage() {
    projectImage.src = sliderImages[currentIndex];
    currentIndex = (currentIndex + 1) % sliderImages.length;
  }

  // Initial display
  showNextImage();

  // Rotate every 3 seconds
  setInterval(showNextImage, 3000);
});
