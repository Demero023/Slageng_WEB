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
      "https://script.google.com/macros/s/AKfycbxzmmtEjMobeR_WgEf7JqtmfiRRrmBu_08lHLGtuONRKeJvBG1_NNPZ9JsFO6ToHK0jNg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    alert(
      "Booking submitted! Please be patient we'll contact you shortly to confirm.",
    );
    document.getElementById("bookingForm").reset();
    document.getElementById("bookingModal").style.display = "none";
  };
}

// Scroll fade-in animation
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

fadeElements.forEach((el) => observer.observe(el));

// Hide loading screen when page is fully loaded
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.add("hidden");
  }
});

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  //Prevent chrom from showing its banner
  e.preventDefault;
  deferredPrompt = e;

  //trigger native install
  deferredPrompt.prompt();

  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the Slageng app install");
    }

    deferredPrompt = null;
  });
});
// Back to Top button
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
