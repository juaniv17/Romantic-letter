document.getElementById("open-btn").addEventListener("click", function () {
  const envelopeImg = document.getElementById("envelope-img");
  envelopeImg.src = "images/envelope-open.png";

  // Optional: add an animation
  envelopeImg.style.transform = "scale(1.1)";

  // Hide button and envelope after a delay, show letter
  setTimeout(() => {
    document.getElementById("envelope").style.display = "none";
    document.getElementById("letter").style.display = "block";
  }, 1000);
});

const photoGrid = document.getElementById('photoGrid');

// List your image filenames here
const images = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
  "photo6.jpeg",
  "photo7.jpeg",
  "photo8.jpeg",
  "photo9.jpeg",
  "photo10.jpeg",
  "photo11.jpeg",
  "photo12.jpeg",
  "photo13.jpeg",
  "photo14.jpeg",
  "photo15.jpeg",
  "photo16.jpeg",
  "photo17.jpeg",
  "photo18.jpeg",
  "photo19.jpeg",
  "photo20.jpeg",
  "photo21.jpeg",
  "photo22.jpeg",
  "photo23.jpeg",
  "photo24.jpeg",
  "photo25.jpeg",
  "photo26.jpeg",
  "photo27.jpeg",
  "photo28.jpeg",
  "photo29.jpeg",
  "photo30.jpeg"
  // add as many as you want
];

// Fill the grid with many copies
const totalPhotos = 200; // You can increase this if needed

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(images);
for (let i = 0; i < totalPhotos; i++) {
  const img = document.createElement("img");
  img.src = "images/" + images[i % images.length];

  img.onerror = () => {
    img.remove(); // Removes broken images
  };

  photoGrid.appendChild(img);
}
shuffle(images);
// DUPLICATE the same images again for seamless looping
for (let i = 0; i < totalPhotos; i++) {
  const img = document.createElement("img");
  img.src = "images/" + images[i % images.length];

  img.onerror = () => {
    img.remove();
  };

  photoGrid.appendChild(img);
}