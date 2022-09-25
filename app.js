var googleMapsApiKey = config.GOOGLE_MAPS_API_KEY;

const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".nav__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// modal items
const productModal = document.getElementById("product__modal");
const productModalOpenBtn = document.getElementById("product__modal__btn");
const productModalCloseBtn = document.querySelector(".product__close__btn");

productModalOpenBtn.addEventListener("click", () => {
  productModal.style.display = "block";
});

productModalCloseBtn.addEventListener("click", () => {
  productModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.style.display = "none";
  }
});

// contact us modal
const contactModal = document.getElementById("contact__modal");
const contactModalOpenBtn = document.getElementById("contact__modal__btn");
const contactModalCloseBtn = document.querySelector(".contact__close__btn");

contactModalOpenBtn.addEventListener("click", () => {
  contactModal.style.display = "block";
});

contactModalCloseBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// product form validation
const productForm = document.getElementById("product-form");
const productFullName = document.getElementById("product-name");
const productEmail = document.getElementById("product-email");
const productDescription = document.getElementById("product-description");

// show error message
function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = "form__validation error";

  const errorMessage = formValidation.querySelector("p");
  errorMessage.innerText = message;
}

// show valid message
function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = "form__validation valid";
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input);
    }
  });
}

// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showValid(input);
  }
}

// get field name
function getFieldName(input) {
  return (
    input.name.split("-")[1].charAt(0).toUpperCase() +
    input.name.split("-")[1].slice(1)
  );
}

// event listeners
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([productFullName, productEmail, productDescription]);
  checkLength(productFullName, 3, 40);
  checkRequired(productDescription, 10, 400);
});

// contact us form validation
const contactForm = document.getElementById("contact-form");
const contactFullName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactReason = document.getElementById("contact-reason");
const contactFeedBack = document.getElementById("contact-feedback");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([
    contactFullName,
    contactEmail,
    contactReason,
    contactFeedBack,
  ]);
  checkLength(contactFullName, 3, 40);
});

function SwitchToProductModal() {
  let option = document.getElementById("contact-reason").value;

  if (option === "trouble_finding_product") {
    contactModal.style.display = "none";
    productModal.style.display = "block";
  }
}

// Google maps
function initMap() {
  const midway = { lat: 38.97, lng: -92.4217 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: midway,
  });
  const marker = new google.maps.Marker({
    position: midway,
    map: map,
  });
}

window.initMap = initMap;
