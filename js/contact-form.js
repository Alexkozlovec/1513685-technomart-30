import { showModal, showError, removeError } from "./global.js";

const contactModal = document.querySelector(".modal-contact");
const contactForm = contactModal.querySelector(".contact-form");
// Inputs
const allInputs = Array.from(contactForm.querySelectorAll("[name]"));
const fieldName = contactForm.querySelector("#name");
const fieldMail = contactForm.querySelector("#email");
const fieldMessage = contactForm.querySelector("#message");
// triggerButton
const openContactModalBtn = document.querySelector(".btn--contacts");

// Переменные для данных из localStorage
let storageSupport = true;
let nameFromStorage = "";
let mailFromStorage = "";

// Проверяет работает ли localStorage, получает оттуда данные
// и записывает их в соответствующие переменные.
try {
  nameFromStorage = localStorage.getItem("name");
  mailFromStorage = localStorage.getItem("email");
} catch (err) {
  storageSupport = false;
}

// Записывает в инпуты значения из localStorage
const setValuesFromLocalStorage = () => {
  if (nameFromStorage) fieldName.value = nameFromStorage;
  if (mailFromStorage) fieldMail.value = mailFromStorage;
}

// Ставит фокус на первый пустой инпут, или поле сообщения.
const setFocus = () => {
  const firstEmpty = allInputs.find((el) => !el.value);
  firstEmpty ? firstEmpty.focus() : fieldMessage.focus();
}

// Валидация формы, если успешная записывает
// имя и email в localStorage.
const handleSubmit = (evt) => {
  if (!fieldName.value || !fieldMail.value || !fieldMessage.value) {
    evt.preventDefault();
    removeError(contactModal);
    void contactModal.offsetWidth;
    showError(contactModal);
  } else {
    localStorage.setItem("name", fieldName.value);
    localStorage.setItem("email", fieldMail.value);
  }
}

openContactModalBtn.addEventListener("click", () => {
  showModal(contactModal);
  setValuesFromLocalStorage();
  setFocus();
});

contactForm.addEventListener("submit", handleSubmit);
