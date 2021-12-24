import { getElement } from "../utils.js";
const amountPlus = getElement(".plus");
const amountMinus = getElement(".minus");
const amountDOM = getElement(".amount-value");

function amountVariation() {
  amountPlus.addEventListener("click", function () {
    amountDOM.textContent++;
  });

  amountMinus.addEventListener("click", function () {
    amountDOM.textContent--;
    if (amountDOM.textContent < 0) {
      amountDOM.textContent = 0;
    }
  });
}
export { amountVariation };
