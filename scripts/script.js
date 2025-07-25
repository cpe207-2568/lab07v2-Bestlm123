// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// clear validation state on input
[firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(input => {
  input.oninput = () => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
  };
});

// add callback function for submit button.
submitBtn.onclick = (e) => {
  e.preventDefault();

  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  let isPasswordConfirmOk = false;

  // validate first name (not empty, only letters)
  if (firstNameInput.value.trim().length > 0 && /^[A-Za-zก-๙]+$/.test(firstNameInput.value.trim())) {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  } else {
    firstNameInput.classList.add("is-invalid");
  }

  // validate last name (not empty, only letters)
  if (lastNameInput.value.trim().length > 0 && /^[A-Za-zก-๙]+$/.test(lastNameInput.value.trim())) {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  }

  // validate email
  if (validateEmail(emailInput.value.trim())) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  // validate password (at least 6 chars)
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }

  // validate confirm password (match password and valid)
  if (
    passwordConfirmInput.value === passwordInput.value &&
    passwordInput.value.length >= 6
  ) {
    passwordConfirmInput.classList.add("is-valid");
    isPasswordConfirmOk = true;
  } else {
    passwordConfirmInput.classList.add("is-invalid");
  }

  // show alert if all valid
  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isPasswordConfirmOk) {
    alert("Registered successfully");
  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(input => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    input.value = "";
  });
};
