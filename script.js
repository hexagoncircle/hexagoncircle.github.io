const slider = document.querySelector(".theme-slider");

const setThemeSettings = () => {
  if (localStorage.theme) {
    document.body.dataset.theme = localStorage.theme;
    slider.value = localStorage.theme;
    return;
  }

  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.dataset.theme = 5;
    slider.value = 5;
  }
};

setThemeSettings();
setTimeout(() => document.body.style.setProperty("--duration", "200ms"), 1000);

[...images].forEach((image) => {
  image.addEventListener("load", (event) => {
    event.target.removeAttribute("data-is-loading");
  });
});

slider.addEventListener("input", () => {
  document.body.dataset.theme = slider.value;
  localStorage.setItem("theme", slider.value);
});
