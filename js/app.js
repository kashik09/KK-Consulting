const phoneInputField = document.querySelector("#floatingPhone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");
    const emailInput = document.getElementById("floatingEmail");
    const promoCheck = document.getElementById("promoCheck");
    const errorMsg = document.getElementById("error-msg");

    phoneInputField.value = localStorage.getItem("phone") || "";
    emailInput.value = localStorage.getItem("email") || "";
    promoCheck.checked = localStorage.getItem("promo") === "true";

    phoneInputField.addEventListener("input", () => {
        localStorage.setItem("phone", phoneInput.getNumber());
    });

    emailInput.addEventListener("input", () => {
        localStorage.setItem("email", emailInput.value);
    });

    promoCheck.addEventListener("change", () => {
        localStorage.setItem("promo", promoCheck.checked);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        let message = "";

        if (!phoneInput.isValidNumber()) {
            isValid = false;
            message += "Invalid phone number format.\n";
        }

        if (!emailInput.value.endsWith("@gmail.com")) {
            isValid = false;
            message += "Please use a Gmail email address.\n";
        }

        if (isValid) {
            alert("Form submitted successfully!");
            localStorage.removeItem("phone");
            localStorage.removeItem("email");
            localStorage.removeItem("promo");
            form.submit();
        } else {
            errorMsg.textContent = message;
            errorMsg.style.display = "block";
        }
    });
});