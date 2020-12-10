const images = document.querySelectorAll("img");
const slider = document.querySelector(".theme-slider");

[...images].forEach((image) => {
  image.addEventListener("load", (event) => {
    event.target.removeAttribute("data-is-loading");
  });
});

document.body.dataset.theme = slider.value;

slider.addEventListener("input", () => {
  document.body.dataset.theme = slider.value;
});