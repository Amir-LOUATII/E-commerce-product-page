import { getElement } from "../utils.js";
import { product } from "../data.js";
import { addTocart } from "../cart/addtoCart.js";
import { openCart } from "../cart/toggleCart.js";
// select items
const popupContent = getElement(".popup-content");
const popup = getElement(".popup");
const addProdBtn = getElement(".add-to-cart");
const successMsg = getElement(".success-msg");
const btnContainer = getElement(".buttons");
const question = getElement(".question");
const Cancel = getElement(".cancel");
const confirm = getElement(".confirm");

const addPopuptoDOM = () => {
  const {
    name,
    images: { thumbnail },
  } = product;
  const amount = getElement(".amount-value").textContent;
  popupContent.innerHTML = `
  <article>
    <div class="popup-product-img">
      <img
        src=${thumbnail[0]}
        alt="cart product image"
        class="cart-product-image"
      />
    </div>
    <div class="popup-product-desc">
      <h4 class="popup-product-name">${name}</h4>
      <h4 class="amount-popup">
        Amount: <span class="popup-amount-count">${amount}</span>
      </h4>
    </div>
  </article>
</div>`;
};

addProdBtn.addEventListener("click", function () {
  const amount = getElement(".amount-value").textContent;
  if (amount != 0) {
    popupContent.classList.remove("hide");
    successMsg.classList.add("hide");
    btnContainer.classList.remove("hide");
    question.classList.remove("hide");
    confirm.classList.remove("hide");
    Cancel.classList.remove("hide");
    addPopuptoDOM();
    popup.classList.remove("hide");
  }
});

// add product to cart
confirm.addEventListener("click", function () {
  let amount = getElement(".amount-value");
  const id = product.id;
  addTocart(id);
  popupContent.classList.add("hide");
  successMsg.classList.remove("hide");
  btnContainer.classList.add("hide");
  question.classList.add("hide");
  confirm.classList.add("hide");
  Cancel.classList.add("hide");
  openCart();
  amount.textContent = "0";
  setTimeout(() => {
    popup.classList.add("hide");
  }, 2000);
});

// close popup
Cancel.addEventListener("click", function () {
  popup.classList.add("hide");
});
