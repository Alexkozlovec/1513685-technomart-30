import {showModal} from "./global.js";

const modalMap = document.querySelector(".modal-map");
const modalMapTrigger = document.querySelector(".map-preview");

modalMapTrigger.addEventListener("click", (evt) => {
  evt.preventDefault();
  showModal(modalMap);
});