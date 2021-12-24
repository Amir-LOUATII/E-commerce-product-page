import { getElement, getLocalStorageItem } from "./utils.js";
import { modalSlider } from "./modal/modal-Slider.js";

// selectItem
const SmallImgContainer = getElement(".product-images");
const bigImg = getElement(".product-big-img img");

function displayProductImg() {
  const product = getLocalStorageItem("product");
  const {
    images: { img, thumbnail },
  } = product;
  //   displaying big img
  bigImg.src = img[0];
  // displaying small images
  SmallImgContainer.innerHTML = thumbnail
    .map((item, index) => {
      let theClass = "displayed";
      if (index === 0) {
        theClass = "active";
      }
      return ` <div class="product-img">
  <img
    class=${theClass}
    src=${item}
    alt=""
  />
</div>`;
    })
    .join("");
  // sleect small img
  const SmallImg = document.querySelectorAll(".product-img img");
  SmallImg.forEach((item, index) => {
    //   adding active class on click
    item.addEventListener("click", function (e) {
      SmallImg.forEach((im) => {
        im.classList.add("active");
        if (e.currentTarget !== im) {
          im.classList.remove("active");
        }
      });
      bigImg.src = img[index];
    });
  });
}

export { displayProductImg };
