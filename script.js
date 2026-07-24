// Reference to the booking modal element (expected to have id="bookingModal")
const modal = document.getElementById("bookingModal");

// Button that opens the booking modal (expected to have id="bookNowBtn")
const btn = document.getElementById("bookNowBtn");

// Close button inside the modal (expected to have a class of "close-btn")
const closeBtn = document.querySelector(".close-btn");

// Open modal when clicked
if (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  };
}

// Close the modal
if (closeBtn) {
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}

// Close the modal when clicking out side
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Hamburger
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
console.log("Script loaded!");

//Saving form
//Saving form — Combined version
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.onsubmit = function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      guests: document.getElementById("guests").value,
      message: document.getElementById("message").value,
    };

    // Send data to Google Sheets
    fetch(
      "https://script.google.com/macros/s/AKfycbw60mccnKXi1KoV8tPKHnf7HAh_ZG17rlmmKcrUOnHRzs1-sxCnEtPMCQp4Xf7HMtcq7Q/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    alert("✅ Booking submitted! We'll contact you shortly.");
    document.getElementById("bookingForm").reset();
    document.getElementById("bookingModal").style.display = "none";
  };
}
