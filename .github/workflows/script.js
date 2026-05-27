
function toggleMenu() {
  const nav = document.getElementById("navMenu");

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}


function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eventType = document.getElementById("eventType").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value.trim();
  const message = document.getElementById("message").value.trim();

  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    eventType === "" ||
    date === "" ||
    guests === "" ||
    message === ""
  ) {
    alert("Please complete all fields before submitting.");
    return false;
  }

  if (Number(guests) <= 0) {
    alert("Please enter a valid number of guests.");
    return false;
  }

  alert("Thank you, your booking request has been submitted.");
  return true;
}

/* Gallery slider */
const galleryImages = [
  "images/food5.jpg",
  "images/food6.jpg",
  "images/food7.jpg",
  "images/food8.jpg",
  "images/food9.jpg",
  "images/food10.jpg"
];

let currentImage = 0;

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("sliderImage");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", function () {
      currentImage++;

      if (currentImage >= galleryImages.length) {
        currentImage = 0;
      }

      slider.src = galleryImages[currentImage];
    });

    prevBtn.addEventListener("click", function () {
      currentImage--;

      if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
      }

      slider.src = galleryImages[currentImage];
    });
  }
});