import { getElement } from "../utils.js";
import { getLocalStorageItem } from "../utils.js";
const modalBigImgConatiner = getElement(".modal-product-big-img");
const modalNextBtn = getElement(".modal-next");
const modalPrevBtn = getElement(".modal-prev");
const modalBigImg = getElement(".modal-big");
const SmallImgContainer = getElement(".modal-product-images");
function modalSlider() {
  // get product from local storage
  const product = getLocalStorageItem("product");
  //
  const {
    images: { img, thumbnail },
  } = product;

  // display small img
  SmallImgContainer.innerHTML = thumbnail
    .map((item, index) => {
      let theClass = "";
      if (index == 0) {
        theClass = "active";
      }
      return `   <div class="modal-product-img">
    <img
    class='prod-img ${theClass}'
      src=${item}
      alt=""
      data-id='${index}'
    />
  </div>`;
    })
    .join("");

  // select small img
  const Smallimg = document.querySelectorAll(".prod-img");
  // slider configuration
  let currentItem = 0;
  // next button
  modalNextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > img.length - 1) {
      currentItem = 0;
    }

    modalBigImg.src = img[currentItem];
    // add active class
    addACtiveClass(currentItem, Smallimg);
  });

  modalPrevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = img.length - 1;
    }
    // add active class
    addACtiveClass(currentItem, Smallimg);
    modalBigImg.src = img[currentItem];
  });
}

function addACtiveClass(currentItem, data) {
  data.forEach((item) => {
    const id = item.dataset.id;

    if (currentItem == id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
export { modalSlider };
