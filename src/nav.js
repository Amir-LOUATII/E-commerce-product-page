import { getElement } from "./utils.js";
// select item
const toggleBtn = getElement(".toggle-btn");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeIcom = getElement(".sidebar-close-icon");

toggleBtn.addEventListener("click", function () {
  sidebarOverlay.classList.remove("hide");
});

closeIcom.addEventListener("click", function () {
  sidebarOverlay.classList.add("hide");
});
