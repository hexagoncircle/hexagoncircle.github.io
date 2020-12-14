const images = document.querySelectorAll("img");
const slider = document.querySelector(".theme-slider");

const setThemeValue = (value) => {
  document.body.dataset.theme = value;
  slider.value = value;
};

const getThemeValue = () => {
  if (localStorage.theme) {
    setThemeValue(localStorage.theme);
    return;
  }
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    setThemeValue(5);
  }
};

document.body.removeAttribute("data-no-js");

getThemeValue();
setTimeout(() => document.body.style.setProperty("--duration", "200ms"), 1000);

[...images].forEach((image) => {
  image.addEventListener("load", (event) => {
    event.target.removeAttribute("data-is-loading");
  });
});

slider.addEventListener("input", () => {
  setThemeValue(slider.value);
  localStorage.setItem("theme", slider.value);
});
