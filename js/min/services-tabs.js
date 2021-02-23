const tabs=Array.from(document.querySelectorAll(".services__tab"));const tabsButtons=Array.from(document.querySelectorAll(".btn-tabs"));const tabActiveClass="services__tab--current";const tabsBtnActiveClass="btn-tabs--current";tabsButtons.forEach((btn,i)=>{btn.addEventListener("click",()=>{switchTab(i)})});const removeActiveClass=(elements,activeClass)=>{elements.find(el=>el.classList.contains(activeClass)) .classList.remove(activeClass)};const switchTab=(idx)=>{removeActiveClass(tabs,tabActiveClass);removeActiveClass(tabsButtons,tabsBtnActiveClass);tabs[idx].classList.add(tabActiveClass);tabsButtons[idx].classList.add(tabsBtnActiveClass)}
