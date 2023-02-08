function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("validation-form");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");
const content = document.getElementById("content");
const heroSection = document.querySelector('.hero-section');

// DOM Elements for each input and error
const firstname = document.getElementById("first");
const firstnameError = document.getElementById("firstError");
const lastname = document.getElementById("last");
const lastnameError = document.getElementById("lastError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");
const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
const location2 = document.getElementsByName("location");
const locationError = document.getElementById("locationError");
const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");

// variable mobile media query
let mediaQueryMobile = window.matchMedia("(max-width: 540px)");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // if mobile screen, heroSection doesn't appear
  if(mediaQueryMobile.matches){
    heroSection.style.display = "none";
  }
}
// close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  if(mediaQueryMobile.matches){
    heroSection.style.display = "block";
  }
}
// button close and confirmation message not displayed
closeBtnRed.style.display = "none";
confirmationMsg.style.display = "none";

let isValidForm = false;
// inputs check + error message and its style
let verifName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
// if first.value || last.value is empty
// and doesn't respect regex name,
// or first.length is less than 2 characters
// then error message is displayed
function isValidFirstName() {
  if(verifName.exec(firstname.value) === null || firstname.length < 2) {
    firstnameError.textContent = "Veuillez entrer 2 caractères minimum";
    firstnameError.style.color = "red";
    firstnameError.style.fontSize = "10px";
    firstname.style.borderColor = "red";
    firstname.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    firstnameError.style.display = "none";
    firstname.style = "default";
  }
}
function isValidLastName() {
  if(verifName.exec(lastname.value) === null || lastname.length < 2) {
    lastnameError.textContent = "Veuillez entrer 2 caractères minimum";
    lastnameError.style.color = "red";
    lastnameError.style.fontSize = "10px";
    lastname.style.borderColor = "red";
    lastname.style.borderWidth = "2px";
    return isValidForm === false;
  }  else {
    lastnameError.style.display = "none";
    lastname.style = "default";
  }
}
function isValidEmail() {
  // if email doesn't correspond to regex => error
  let verifEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(verifEmail.exec(email.value) === null) {
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    emailError.style.display = "none";
    email.style = "default";
  }
}
function isValidBirthday() {
  let birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[0-9][0-9]|20[0-2][0-9])$/;

  if (!birthdate.value) {
    birthdateError.textContent = "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    return isValidForm === false;
  }
  birthdateError.style.display = "none";
  birthdate.style = "default";
}
function checkInputs(){
  // if quantity.value is empty or its value is not a number => error
  if(quantity.value === "" || isNaN(quantity.value)) {
    quantityError.textContent = "Veuillez renseigner ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  }

  //if one of the option is not checked => error
  if(!(location2[0].checked || location2[1].checked || location2[2].checked || location2[3].checked || location2[4].checked || location2[5].checked)) {
    locationError.textContent = "Veuillez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    return isValidForm === false;
  } else {
    locationError.style.display = "none";
    location2.style = "default";
  }

  if(!conditions.checked) {
    conditionsError.textContent = "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    return isValidForm === false;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  }
  return isValidForm = true;
}

// function called at form submit event
function validate(event){
  // default behavior of submit event is avoided
  event.preventDefault();
  // run all validation function instead
  isValidFirstName();
  isValidLastName();
  isValidEmail();
  isValidBirthday();
  checkInputs();
  // all inputs must be true so the form can be submitted correctly
  // if so, confirmation message and red close button are displayed
  if(isValidForm === true) {
    form.style.display = "none";
    confirmationMsg.style.fontSize = "30px";
    confirmationMsg.style.textAlign = "center";

    closeBtnRed.style.display = "block";
    submitBtn.style.display = "none";
    confirmationMsg.style.display = "flex";
    content.style.height = "750px";
    closeBtnRed.addEventListener("click", closeModal);
    return true;
  }
  content.style.height = "815px";
}

// listening submit event on form element so function validate is run
form.addEventListener("submit", validate);
