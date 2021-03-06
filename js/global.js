const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal__close");
// Модальное окно корзины
const modalCart = document.querySelector(".modal-cart");
// Кнопки добавления в корзину и закладки
const addToCartBtns = document.querySelectorAll(".btn--buy");
const addToBookmarksBtns = document.querySelectorAll(".btn--bookmarks");
// Ссылки на корзину и закладки
const linkCart = document.querySelector(".user-nav__link--cart");
const linkBookmarks = document.querySelector(".user-nav__link--bookmarks");

// Классы элементов, и их классы активности
const CLASSES = {
  button: "btn",
  modal: "modal",
  modalActive: "modal--active",
  modalError: "modal--error",
  userLinkNotEmpty: "user-nav__link--has-items"
}

const closeModal = (el) => {
  el.classList.remove(CLASSES.modalActive);
  el.classList.remove(CLASSES.modalError);
};

const showModal = (el) => {
  el.classList.add(CLASSES.modalActive);
};

window.addEventListener("keydown", ({keyCode}) => {
  if(keyCode === 27) {
    modals.forEach(modal => {
      if(modal.classList.contains(CLASSES.modalActive)) {
        closeModal(modal);
      }
    });
  };
});

modalCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    closeModal(btn.closest(`.${CLASSES.modal}`));
  });
});

// Базовая реализация. Счетчики не инкрементирую
// так как нужна дополнительная валидация.
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    showModal(modalCart);
    linkCart.classList.add(CLASSES.userLinkNotEmpty);
  });
});

addToBookmarksBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    linkBookmarks.classList.add(CLASSES.userLinkNotEmpty);
  });
});

modalCart.addEventListener("click", ({target}) => {
  if(target.classList.contains(CLASSES.button)) {
    closeModal(modalCart);
  };
});
