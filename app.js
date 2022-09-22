const product_tab = document.querySelector(".product_suggestion_tab");
const contact_tab = document.querySelector(".contact_form_tab");
const pform = document.querySelector("#product_form");
const cform = document.querySelector("#contact_form");
const productButtonTab = document.querySelector(".product_suggestion_tab");
const contactButtonTab = document.querySelector(".contact_us_tab");

const productTab = () => {
  if (pform.style.display === "none") {
    pform.style.display = "block";
    cform.style.display = "none";
  } else {
    pform.style.display = "none";
  }
};

const contactTab = () => {
  if (cform.style.display === "none") {
    cform.style.display = "block";
    pform.style.display = "none";
  } else {
    cform.style.display = "none";
  }
};
