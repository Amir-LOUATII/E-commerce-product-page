// globalimports
import "./src/nav.js";
import "./src/cart/toggleCart.js";
import "./src/modal/toggleModal.js";
import "./src/data.js";
import "./src/popup/togglePopup.js";

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
  setLoacalstorage("product", product);
  displayProduct(product);
  displayProductImg();
  modalSlider();
  slider();
  intializeCart();
  amountVariation();
});

const confirm = getElement(".confirm");

confirm.addEventListener("click", function () {
  console.log("clicked");
  const id = product.id;
  addTocart(id);
});
