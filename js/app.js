const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const form = document.querySelector("#contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (phoneInput.isValidNumber()) {
    const phoneNumber = phoneInput.getNumber();
    // Proceed with form submission or further processing
    console.log("Valid phone number:", phoneNumber);
  } else {
    alert("Please enter a valid phone number.");
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

// Wait until the page fully loads before running this script
document.addEventListener("DOMContentLoaded", function () { 
    // Select the input fields
    // These are the form elements where the user enters data
    const phoneInput = document.getElementById("floatingPhone"); // Phone number field
    const emailInput = document.getElementById("floatingEmail"); // Email field
    const promoCheck = document.getElementById("promoCheck");   // Checkbox for promo updates

    // Restore previously saved values from localStorage
    // If no data exists, set the inputs to empty (""), preventing 'null' from showing
    phoneInput.value = localStorage.getItem("phone") || "";  // Get saved phone number or set empty
    emailInput.value = localStorage.getItem("email") || "";  // Get saved email or set empty
    promoCheck.checked = localStorage.getItem("promo") === "true"; // Convert string to boolean

    // Save the input values as the user types
    // This ensures that whatever they enter gets saved in the browser's local storage
    phoneInput.addEventListener("input", () => {
        localStorage.setItem("phone", phoneInput.value); // Save phone number
    });

    emailInput.addEventListener("input", () => {
        localStorage.setItem("email", emailInput.value); // Save email address
    });

    promoCheck.addEventListener("change", () => {
        localStorage.setItem("promo", promoCheck.checked); // Save checkbox state (true/false)
    });
});
