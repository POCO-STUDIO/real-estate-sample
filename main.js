var totalNumberOfImages = 4;
var currentImageIndex = 1;

function goToNextImage() {
  var currentImage = document.getElementById("property-image");
  if (currentImageIndex < totalNumberOfImages) {
    currentImageIndex++;
  } else {
    currentImageIndex = 1;
  }

  currentImage.src = "images/image" + currentImageIndex + ".jpg";
}

function goToPreviousImage() {
  var currentImage = document.getElementById("property-image");
  if (currentImageIndex === 1) {
    currentImageIndex = totalNumberOfImages;
  } else if (currentImageIndex <= totalNumberOfImages) {
    currentImageIndex--;
  }

  currentImage.src = "images/image" + currentImageIndex + ".jpg";
}
