/*! BuildToolsCookbook v2.0.0 | (c) 2021 Your Name | MIT License | http://github.com/cferdinandi/build-tools-boilerplate */
(function () {
  'use strict';

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

}());
