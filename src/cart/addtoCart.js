import { product } from "../data.js";
import {
  getElement,
  getLocalStorageItem,
  setLoacalstorage,
  priceFormat,
} from "../utils.js";

// select item
const amountDOM = getElement(".amount-value");
const addProdBtn = getElement(".add-to-cart");
const cartContent = getElement(".cart-content");
const emptyMsg = getElement(".empty-cart");

let cart = getLocalStorageItem("cart");
// add product to cart
function addTocart(id) {
  // check if the product exist in the cart
  const item = cart.find((item) => {
    item.id === id;
    return item;
  });
  // add amount to product
  let prodCart = { ...product, amount: 0 };
  // add product to cart if it don't already exist
  if (!item) {
    if (amountDOM.textContent != 0) {
      emptyMsg.classList.add("hide");
      // get number of product to add
      prodCart.amount = parseInt(amountDOM.textContent);
      cart.push(prodCart);
      addTocartDOM(prodCart);
      setLoacalstorage("cart", cart);
      cartTotal();
      cartAmountCount();
    } else return;

    // if product already exist in the cart
  } else if (item) {
    // update amount
    item.amount += parseInt(amountDOM.textContent);
    const cartAmountDOM = getElement(".amount-count");
    cartAmountDOM.textContent = item.amount;
    // update local storage
    setLoacalstorage("cart", cart);
    // get the total
    cartTotal();
    cartAmountCount();
  }
  removeProduct();
}

// add the product ot the document
function addTocartDOM(prodCart) {
  // get product propriety from local storage
  const {
    id,
    name,
    amount,
    images: { thumbnail },
  } = prodCart;
  // create a new article
  const amountCount = getElement(".prod-num");
  amountCount.textContent = amount;
  const article = document.createElement("article");
  article.innerHTML = ` <div class="cart-product-img">
<img
  src=${thumbnail[0]}
  alt="cart product image"
  class="cart-product-image"
/>
</div>
<div class="cart-product-desc">
<h4 class="cart-product-name">${name}</h4>
<h4 class="amount-cart">
  Amount: <span class="amount-count">${amount}</span>
</h4>
<span class="cart-remove" data-id=${id}>Remove</span>
</div>`;
  cartContent.prepend(article);
}

// intialize the cart on refresh
function intializeCart() {
  const id = product.id;
  let cart = getLocalStorageItem("cart");
  if (cart.length > 0) {
    const item = cart.find((item) => {
      item.id === id;
      return item;
    });
    addTocartDOM(item);
  } else {
    emptyMsg.classList.remove("hide");
  }
  cartTotal();
}

// calculate the total
const cartTotal = () => {
  const total = cart.reduce((accu, curr) => {
    accu +=
      (curr.price * parseFloat(curr.amount) * parseFloat(curr.sale)) / 100;
    return accu;
  }, 0);

  const totalDOM = getElement(".cart-total");
  totalDOM.classList.remove("hide");
  totalDOM.textContent = `Total: ${priceFormat(parseFloat(total))}`;
  if (cart.length < 1) {
    totalDOM.classList.add("hide");
  }
};

const removeProduct = () => {
  const removeBtn = getElement(".cart-remove");
  removeBtn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.parentElement.remove();
    const id = e.currentTarget.dataset.id;
    cart = cart.filter((item) => {
      return item.id != id;
    });

    setLoacalstorage("cart", cart);
    cartTotal();
    cartAmountCount();
    if (cart.length < 1) {
      emptyMsg.classList.remove("hide");
    }
  });
};

function cartAmountCount() {
  const amountCount = getElement(".prod-num");
  if (cart.length > 0)
    amountCount.textContent = cart.reduce((accu, curr) => {
      accu += curr.amount;
      return accu;
    }, 0);
  else amountCount.textContent = "0";
}

export { addTocart, intializeCart };
