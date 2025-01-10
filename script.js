const photos = ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg']; 
let currentPhotoIndex = 0;

function changePhoto() {
  const sliderImage = document.getElementById('slider-image');
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  sliderImage.src = photos[currentPhotoIndex];
}

// Change photo every 3 seconds
setInterval(changePhoto, 3000);
