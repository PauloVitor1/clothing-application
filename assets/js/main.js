const form = document.getElementById("form");
const btnSubmit = document.getElementById("submit-btn");
const input = document.querySelector(".form_input");
const errorIcon = document.getElementById("error-icon");
const validationMessage = document.querySelector(".validationMessage");

form.addEventListener("submit", Validate);
btnSubmit.addEventListener("click", Validate);

function Validate(event) {
  event.preventDefault();
  console.log(input.value);

  if (isEmail(input.value)) {
    errorIcon.classList.add("hidden");
    validationMessage.classList.add("hidden");
    input.classList.add("error");
  } else {
    errorIcon.classList.remove("hidden");
    validationMessage.classList.remove("hidden");
    input.classList.add("error");
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
