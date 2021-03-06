const tabs = Array.from(document.querySelectorAll(".services__tab"));
const tabsSwitches = document.querySelector(".services__switches");
const tabsButtons = Array.from(tabsSwitches.querySelectorAll(".btn-tabs"));
// Классы активности
const tabActiveClass = "services__tab--current";
const tabsBtnActiveClass = "btn-tabs--current";

/**
 * Применил делегирование, один слушатель для
 * всех кнопок.
 * @param {Event} param0
 */
tabsSwitches.addEventListener("click", ({target}) => {
  if(target.classList.contains("btn-tabs")) {
    switchTab(tabsButtons.indexOf(target));
  };
});

/**
 * Находит в коллекции элемент с классом активности,
 * и снимает его.
 * @param {Number} elements
 * @param {String} activeClass
 */
const removeActiveClass = (elements, activeClass) => {
  elements.find(el => el.classList.contains(activeClass))
  .classList.remove(activeClass);
};

/**
 * Переключает активные таб и кнопку по полученному индексу
 * @param {Number} idx
 */
const switchTab = (idx) => {
  removeActiveClass(tabs, tabActiveClass);
  removeActiveClass(tabsButtons, tabsBtnActiveClass);

  tabs[idx].classList.add(tabActiveClass);
  tabsButtons[idx].classList.add(tabsBtnActiveClass);
};
