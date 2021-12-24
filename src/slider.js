import { getElement, getLocalStorageItem } from "./utils.js";

// select item
const sliderImgConatiner = getElement(".slider-image");
const sliderNextBtn = getElement(".slider-next-btn");
const sliderPrevBtn = getElement(".slider-prev-btn");
const sliderImg = getElement(".slider-image img");
function slider() {
  // get product from local storage
  const product = getLocalStorageItem("product");
  //
  const {
    images: { img, thumbnail },
  } = product;
  // slider intialization
  sliderImg.src = img[0];
  // slider configuration
  let currentItem = 0;
  // next button
  sliderNextBtn.addEventListener("click", function () {
    if (currentItem > img.length - 1) {
      currentItem = 0;
    }
    sliderImg.src = img[currentItem];
    currentItem++;
  });

  // prev button
  sliderPrevBtn.addEventListener("click", function () {
    if (currentItem < 0) {
      currentItem = img.length - 1;
    }

    sliderImg.src = img[currentItem];

    currentItem--;
  });
}


export { slider };
