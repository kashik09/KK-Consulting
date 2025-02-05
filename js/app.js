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