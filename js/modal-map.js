const modalMap = document.querySelector(".modal-map");
const modalMapTrigger = document.querySelector(".map-preview");

modalMapTrigger.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalMap.classList.add("modal--active");
});
