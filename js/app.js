const phoneInputField = document.querySelector("#floatingPhone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");
    const emailInput = document.getElementById("floatingEmail");
    const promoCheck = document.getElementById("promoCheck");
    const errorMsg = document.getElementById("error-msg");

    // Restore previous inputs from localStorage
    phoneInputField.value = localStorage.getItem("phone") || "";
    emailInput.value = localStorage.getItem("email") || "";
    promoCheck.checked = localStorage.getItem("promo") === "true"; // Convert to boolean

    // Save input values on change
    phoneInputField.addEventListener("input", () => {
        localStorage.setItem("phone", phoneInput.getNumber()); // Save formatted number
    });

    emailInput.addEventListener("input", () => {
        localStorage.setItem("email", emailInput.value);
    });

    promoCheck.addEventListener("change", () => {
        localStorage.setItem("promo", promoCheck.checked);
    });

    // Form validation & submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let isValid = true;
        let message = "";

        // Validate Phone Number
        if (!phoneInput.isValidNumber()) {
            isValid = false;
            message += "❌ Invalid phone number format.\n";
        }

        // Validate Email (Only Allow Gmail)
        if (!emailInput.value.endsWith("@gmail.com")) {
            isValid = false;
            message += "❌ Please use a Gmail email address.\n";
        }

        // If Validation Passes, Submit Form
        if (isValid) {
            alert("✅ Form submitted successfully!");
            localStorage.removeItem("phone"); // Clear saved data on success
            localStorage.removeItem("email");
            localStorage.removeItem("promo");
            form.submit(); // Proceed with form submission
        } else {
            errorMsg.textContent = message;
            errorMsg.style.display = "block"; // Show errors
        }
    });
});