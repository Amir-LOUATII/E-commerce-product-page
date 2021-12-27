import { product } from "./data.js";
import { getElement } from "./utils.js";
import { priceFormat } from "./utils.js";

const companyName = getElement(".company-name");
const productName = getElement(".product-name");
const IntialPrice = getElement(".intial-price");
const saleDOM = getElement(".sale");
const priceSale = getElement(".price-sale");
const prductDescrition = getElement(".description");

const displayProduct = (product) => {
  const {
    id,
    name,
    company,
    description,
    price,
    sale,
    images: { img, thumbnail },
  } = product;
  companyName.textContent = company;
  productName.textContent = name;
  prductDescrition.textContent = description;
  IntialPrice.textContent = priceFormat(price);
  saleDOM.textContent = sale;
  priceSale.textContent = priceFormat((price * parseFloat(sale)) / 100);
};

export { displayProduct };
