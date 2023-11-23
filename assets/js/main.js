const features = document.querySelector("li#features");
const featuresDropdown = document.querySelector("#featuresDropdown");
const company = document.querySelector("li#company");
const companyDropdown = document.querySelector("#companyDropdown");
const body = document.querySelector("body");

features.addEventListener("mouseover", function () {
  featuresDropdown.style.display = "flex";
  companyDropdown.style.display = "none";
});

company.addEventListener("mouseover", function () {
  companyDropdown.style.display = "flex";
  featuresDropdown.style.display = "none";
});

body.addEventListener("click", function (e) {
  if (e.target == featuresDropdown || e.target == companyDropdown) {
    return;
  } else {
    featuresDropdown.style.display = "none";
    companyDropdown.style.display = "none";
  }
});

const openMenuIcon = document.querySelector("#openMenuIcon");
const closeMenuIcon = document.querySelector("#closeMenuIcon");
const OpenMobileMenu = document.querySelector("#OpenMobileMenu");

openMenuIcon.addEventListener("click", () => {
  body.id = "OpenMobileMenu";
});

closeMenuIcon.addEventListener("click", () => {
  body.removeAttribute("id");
});
