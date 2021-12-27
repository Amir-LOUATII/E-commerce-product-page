import { getElement } from "../utils.js";
const cartIcon = getElement(".cart-icons");
const cart = getElement(".cart");
const avatar = getElement(".avatar");

cartIcon.addEventListener("click", function () {
  cart.classList.toggle("hidden");
});

avatar.addEventListener("click", function () {
  cart.classList.toggle("hidden");
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    cart.classList.add("hidden");
  }
});

function openCart() {
  cart.classList.remove("hidden");
}

export { openCart };
