const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal__close");
// modal cart
const modalCart = document.querySelector(".modal-cart");
// buttons
const addToCartBtns = document.querySelectorAll(".btn--buy");
const addToBookmarksBtns = document.querySelectorAll(".btn--bookmarks");

const linkCart = document.querySelector(".user-nav__link--cart");
const linkBookmarks = document.querySelector(".user-nav__link--bookmarks");

// activity classes
const modalActiveClass = "modal--active";
const modalErrorClass = "modal--error";
const userLinkActiveClass = "user-nav__link--has-items";

export function closeModal(el) {
  el.classList.remove(modalActiveClass);
  el.classList.remove(modalErrorClass);
};

export function showModal(el) {
  el.classList.add(modalActiveClass);
};

export function showError(el) {
  el.classList.add(modalErrorClass);
};

export function removeError(el) {
  el.classList.remove(modalErrorClass);
};

window.addEventListener("keydown", ({keyCode}) => {
  if(keyCode === 27) {
    modals.forEach(modal => {
      if(modal.classList.contains(modalActiveClass)) {
        closeModal(modal);
      }
    });
  };
});

modalCloseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    closeModal(btn.closest(".modal"));
  });
});

// Базовая реализация. Счетчики не инкрементирую
// так как нужна дополнительная валидация.
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    showModal(modalCart);
    linkCart.classList.add(userLinkActiveClass);
  });
});

addToBookmarksBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    linkBookmarks.classList.add(userLinkActiveClass);
  });
});

modalCart.addEventListener("click", ({target}) => {
  if(target.classList.contains("btn")) {
    closeModal(modalCart);
  };
});
