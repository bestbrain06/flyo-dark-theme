// Selecting the DOM Elements

const form = document.querySelector(".sign-form");
let error = document.querySelector(".error");
form.addEventListener("submit", getInput);

function getInput(e) {
  e.preventDefault();
  let validEmail = /[A-Za-z0-9_-]+@[A-Za-z0-9-_]+\.[a-zA-Z0-9_-]+/g;
  let input = document.querySelector(".email-input").value;
  validEmail = validEmail.test(input);

  if (!validEmail) {
    error.textContent = "Please enter a valid email address";
  } else {
    error.textContent = "";
  }
}
