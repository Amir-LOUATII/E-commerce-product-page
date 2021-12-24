// globalimports
import "./src/nav.js";
import "./src/cart/toggleCart.js";
import "./src/modal/toggleModal.js";
import "./src/data.js";

// specific import
import {
  getElement,
  getLocalStorageItem,
  setLoacalstorage,
} from "./src/utils.js";
import { displayProduct } from "./src/displayProduct.js";
import { product } from "./src/data.js";
import { modalSlider } from "./src/modal/modal-Slider.js";
import { displayProductImg } from "./src/DisplayProductImg.js";
import { slider } from "./src/slider.js";
import { amountVariation } from "./src/cart/amount.js";
import { addTocart, intializeCart } from "./src/cart/addtoCart.js";

window.addEventListener("load", () => {
  console.log("js failed");
  setLoacalstorage("product", product);
  displayProduct(product);
  displayProductImg();
  modalSlider();
  slider();
  intializeCart();
  amountVariation();
});

const addProdBtn = getElement(".add-to-cart");
addProdBtn.addEventListener("click", function () {
  const id = product.id;
  addTocart(id);
});
