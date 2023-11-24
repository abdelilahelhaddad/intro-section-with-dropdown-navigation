const features = document.querySelector("#features");
const featuresDropdown = document.querySelector("#featuresDropdown");
const company = document.querySelector("#company");
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

featuresDropdown.addEventListener("mouseout", function () {
  featuresDropdown.style.display = "none";
});

companyDropdown.addEventListener("mouseover", function () {
  companyDropdown.style.display = "none";
});

if (window.matchMedia("(max-width: 768px)").matches) {
  featuresDropdown.classList.remove("dropdown");
  companyDropdown.classList.remove("dropdown");
}

const openMenuIcon = document.querySelector("#openMenuIcon");
const closeMenuIcon = document.querySelector("#closeMenuIcon");
const OpenMobileMenu = document.querySelector("#OpenMobileMenu");

openMenuIcon.addEventListener("click", () => {
  body.id = "OpenMobileMenu";
});

closeMenuIcon.addEventListener("click", () => {
  body.removeAttribute("id");
});
