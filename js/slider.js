/*
  Захардкодить слайдер на два слайда было слишком просто.
  Поэтому ниже мое творение – универсальный слайдер под
  любое количество слайдов.

  P.S: Для корректной работы количество буллетов пагинации
  должно быть равно количеству слайдов. При тестировании на
  переполнение придется добавить их вручную.

  P.P.S: А так хотелось рендерить их скриптом, но из разметки
  нельзя убрать...🙄
*/

function initSlider(parent) {
  // Элементы слайдера
  const slider = document.querySelector(parent);
  const slides = Array.from(slider.querySelectorAll(".slider__slide"));
  const sliderControls = Array.from(slider.querySelectorAll(".slider__control"));
  const pagination = slider.querySelector(".slider__pagination");
  const paginationButtons = Array.from(pagination.querySelectorAll(".slider__pagination-btn"));

  // Классы
  const ACTIVITY_CLASSES = {
    slide: "slider__slide--current",
    btnPrev: "slider__control--prev",
    btnNext: "slider__control--next",
    btnPagination: "slider__pagination-btn--current",
  };

  // Индексы текущего и последнего слайдов
  let currentSlideIndex = 0;
  const lastSlideIndex = slides.length - 1;

  /**
   * Переключает слайд согласно номеру нужного слайда.
   * @param {Array} elements
   * @param {String} activeClass
   */
  const slideSwitcher = (elements, activeClass) => {
    elements
      .find((el) => el.classList.contains(activeClass))
      .classList.remove(activeClass);

    elements[currentSlideIndex].classList.add(activeClass);
  };

  const switchSlide = () => {
    slideSwitcher(slides, ACTIVITY_CLASSES.slide);
    slideSwitcher(paginationButtons, ACTIVITY_CLASSES.btnPagination);
  };

  /**
   * Переключает номер активного слайда в зависимости
   * от класса нажатой кнопки.
   * @param {Event} param0
   */
  const handleControlBtnClick = ({ target }) => {
    const { btnPrev, btnNext } = ACTIVITY_CLASSES;

    if (target.classList.contains(btnPrev) && currentSlideIndex > 0) {
      currentSlideIndex--;
    } else if (
      target.classList.contains(btnNext) &&
      currentSlideIndex < lastSlideIndex
    ) {
      currentSlideIndex++;
    } else {
      currentSlideIndex === 0
        ? (currentSlideIndex = lastSlideIndex)
        : (currentSlideIndex = 0);
    }

    switchSlide();
  };

  /**
   * Переключает слайд по клику на кнопку пагинации.
   * @param {Event} param0
   */
  const handlePaginationBtnClick = ({ target }) => {
    const clickedBtnIndex = paginationButtons.indexOf(target);
    if(clickedBtnIndex < slides.length) {
      currentSlideIndex = clickedBtnIndex;
      switchSlide();
    }
  };

  sliderControls.forEach((control) =>
    control.addEventListener("click", handleControlBtnClick)
  );

  pagination.addEventListener("click", handlePaginationBtnClick);
};

initSlider(".slider");
