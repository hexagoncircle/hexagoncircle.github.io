const images = document.querySelectorAll("img");
const slider = document.querySelector(".theme-slider");

[...images].forEach((image) => {
  image.addEventListener("load", (event) => {
    event.target.removeAttribute("data-is-loading");
  });
});

if (localStorage.theme) {
  document.body.dataset.theme = localStorage.theme;
  slider.value = localStorage.theme;
}

window.addEventListener("load", () => {
  document.documentElement.style.setProperty("--duration", "200ms");
});

slider.addEventListener("input", () => {
  document.body.dataset.theme = slider.value;
  localStorage.setItem("theme", slider.value);
});
