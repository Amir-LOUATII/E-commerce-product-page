import { getElement } from "../utils.js";
const productBigImg = getElement(".product-big-img");
const sliderOverlay = getElement(".slider-overlay ");
const closeModal = getElement(".modal-close");

productBigImg.addEventListener("click", function () {
  sliderOverlay.classList.remove("hide");
});

closeModal.addEventListener("click", () => {
  sliderOverlay.classList.add("hide");
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    sliderOverlay.classList.add("hide");
  }
});
