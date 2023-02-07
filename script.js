const navigationContainer = document.querySelector(".navigation-container");
const navBar = document.querySelector(".nav");

navigationContainer.addEventListener("click", () => {
  navigationContainer.classList.toggle("change");
  navBar.classList.toggle("mobile-nav");
});
