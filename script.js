// Reference to the booking modal element (expected to have id="bookingModal")
const modal = document.getElementById("bookingModal");

// Button that opens the booking modal (expected to have id="bookNowBtn")
const btn = document.getElementById("bookNowBtn");

// Close button inside the modal (expected to have a class of "close-btn")
const closeBtn = document.querySelector(".close-btn");

// Open modal when clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking out side
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Submission of the form
document.getElementById("bookingForm").onsubmit = function (e) {
  e.preventDefault();
  alert("✅ Booking submitted! We will contact you shortly.");
  modal.style.display = "none";
  this.reset();
};
