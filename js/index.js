function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");

const formData = document.querySelectorAll(".formData");
const form = document.getElementsByName('reserve');
const validationModal = document.querySelector(".validation-modal");
const validClose = document.getElementById("validation-close");
const errorEmptyField = document.getElementById("errorEmptyField");

const textControl = document.querySelectorAll(".text-control");
const first = document.getElementById("firstname");
const last = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkBoxGtu = document.getElementById("checkbox1");
const checkBoxEmpty = document.getElementById("checkbox-empty");
const cities = document.querySelectorAll(".city");

// launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));
// Close modal
modalBtnClose[0].addEventListener("click", () => {
  modalbg.style.display = "none";
});

// // Validation du formulaire
// const formValid = document.querySelectorAll(".button");

// Error messages array
let errors = [
  "Tous les champs doivent-être renseignés.",
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "L'adresse email n'est pas valide.",
  "Vous devez entrer votre date de naissance.",
  "Veuillez renseigner votre nombre de participation.",
  "Vous devez choisir une ville.",
  "<br>Vous devez vérifier que vous acceptez les termes et conditions.",
];

// Checking form validation
document.getElementById("validation-form").addEventListener("submit", (e) => {
  // Error variable initialized
  let error;
  // Checking inputs with regex
  let regexName = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
  let regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Condition to check all the fields
  for (let i = 0; i < textControl.length; i++) {
    // Checking that the fields are filled
    if (textControl[i].value == "") {
      error = true;
      errorEmptyField.innerHTML = errors[0];
      errorEmptyField.style.fontSize = "14px";
    } else {
      errorEmptyField.innerHTML = "";
    }

    // Checking firstname input
    if (regexName.test(first.value) == false && first.value != "") {
      const errorFirstName = document.getElementById("errorFirstName");
      error = true;
      errorFirstName.textContent = errors[1];
      first.className = "text-control error-border";
    } else if (first.value.length <= 1) {
      error = true;
      errorFirstName.textContent = errors[2];
      first.className = "text-control error-border";
    } else {
      errorFirstName.textContent = "";
      // textControl[0].style.border = "none";
      first.className = "text-control";
    }

    // Checking lastname input
    if (regexName.test(last.value) == false && last.value != "") {
      const errorLastName = document.getElementById("errorLastName");
      error = true;
      errorLastName.textContent = errors[3];
      last.className = "text-control error-border";
    } else if (last.value.length <= 1) {
      error = true;
      errorLastName.textContent = errors[4];
      last.className = "text-control error-border";
    } else {
      errorLastName.textContent = "";
      last.className = "text-control";
    }

    // Checking email input
    if (regexEmail.test(email.value) == false && email.value == "") {
      const errorEmail = document.getElementById("errorEmail");
      error = true;
      errorEmail.textContent = errors[5];
      email.className = "text-control error-border";
    } else {
      errorEmail.textContent = "";
      email.className = "text-control";
    }

    // Checking birthdate input
    if (regexBirthdate.test(birthdate.value) == false) {
      const errorBirthdate = document.getElementById("errorBirthdate");
      error = true;
      errorBirthdate.textContent = errors[6];
      birthdate.className = "text-control error-border";
    } else {
      errorBirthdate.textContent = "";
      birthdate.className = "text-control";
    }

    // Checking the number of participations
    if (regexQuantity.test(quantity.value) == false || quantity.value == "") {
      error = true;
      errorQuantity.textContent = errors[7];
      quantity.className = "text-control error-border";
    } else {
      errorQuantity.textContent = "";
      quantity.className = "text-control";
    }

    // Checking radiobutton city input
    let valid = false;
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].checked) {
        valid = true
      }
    }

    // Checking checkbox GTU input
    if (valid) {
      const errorCity = document.getElementById("errorCity");
      errorCity.textContent = "";
    } else {
      error = true;
      errorCity.textContent = errors[8];
    }

    // Checking checkbox GTU input
    if (checkboxGtu.checked == false) {
      error = true;
      checkboxEmpty.innerHTML = errors[9];
    } else {
      checkboxEmpty.textContent = "";
    }
  }

  // Checking that there is no error detected
  if (error) {
    e.preventDefault();
    return false;
  } else {
    e.preventDefault();
    form.style.display = "none";
    validationModal.className = "validation-block";
    modalBody.classList.add("validation");
  }

  // Submitting form
  document.querySelector(".btn-close-form").addEventListener("click", () => {
    form.submit();
  });
});
