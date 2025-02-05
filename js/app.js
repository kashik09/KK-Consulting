const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const form = document.querySelector("#contactForm");

document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const phoneInput = document.getElementById("floatingPhone").value.trim();
    const countryCode = document.getElementById("countryCode").value;
    const errorMsg = document.getElementById("error-msg");

    // Define regex patterns for different country formats
    const phonePatterns = {
        "+254": /^\+254\d{9}$/, // Kenya: +254 followed by 9 digits
        "+1": /^\+1\d{10}$/, // USA: +1 followed by 10 digits
        "+44": /^\+44\d{10}$/, // UK: +44 followed by 10 digits
        "+91": /^\+91\d{10}$/, // India: +91 followed by 10 digits
        "+86": /^\+86\d{11}$/ // China: +86 followed by 11 digits
    };

    // Check if the phone number matches the selected country's pattern
    if (phonePatterns[countryCode] && phonePatterns[countryCode].test(phoneInput)) {
        errorMsg.style.display = "none"; // Hide error
        alert("Phone number is valid!");
    } else {
        errorMsg.textContent = "Invalid phone number format for " + countryCode;
        errorMsg.style.display = "block"; // Show error
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
