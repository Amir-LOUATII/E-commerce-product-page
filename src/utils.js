function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    console.log(`please check there is no such element :${selection}`)
  );
}
function setLoacalstorage(key, value) {
  const theValue = JSON.stringify(value);
  localStorage.setItem(key, theValue);
}

function getLocalStorageItem(item) {
  const value = JSON.parse(localStorage.getItem(item));
  if (value) {
    return value;
  } else return [];
}

const priceFormat = (price) => {
  const myPrice = new Intl.NumberFormat("fr-TN", {
    style: "currency",
    currency: "TND",
  }).format((price / 1000).toFixed(2));

  return myPrice;
};
export { setLoacalstorage, getLocalStorageItem, getElement, priceFormat };
