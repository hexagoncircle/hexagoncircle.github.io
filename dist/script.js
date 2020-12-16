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

if ("loading" in HTMLImageElement.prototype) {
  images.forEach((img) => (img.src = img.dataset.src));
} else {
  const observer = new IntersectionObserver(setImage, { threshold: 0 });

  function setImage(images, observer) {
    images.forEach((img) => {
      if (img.intersectionRatio > 0) {
        img.target.src = img.target.dataset.src;
        observer.unobserve(img.target);
      }
    });
  }

  images.forEach((img) => observer.observe(img));
}

images.forEach((img) => {
  img.addEventListener("load", (event) => {
    event.target.removeAttribute("data-is-loading");
  });
});

document.body.removeAttribute("data-no-js");

getThemeValue();
setTimeout(() => document.body.style.setProperty("--duration", "200ms"), 1000);

slider.addEventListener("input", () => {
  setThemeValue(slider.value);
  localStorage.setItem("theme", slider.value);
});
