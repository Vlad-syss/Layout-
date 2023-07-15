let body = document.querySelector("body");
//header scroll nav ========================================================================================================================================================================
window.addEventListener("scroll", function () {

    let nav = document.querySelector("#header__nav");
    let navContainer = document.querySelector(".header__container");
    let viewScroll = window.pageYOffset || this.document.documentElement.scrollTo;

    if(viewScroll >= 70){
      nav.classList.add("scroll");
      navContainer.classList.add("scroll");
    }else{
      nav.classList.remove("scroll");
      navContainer.classList.remove("scroll");
    }
})
//header burger ========================================================================================================================================================================
let headerBurger = document.querySelector(".header__burger");
let headerLine = document.querySelector(".header__line");

headerBurger.addEventListener("click", (e) => {
  e.preventDefault();

  headerBurger.classList.toggle("active");
  headerLine.classList.toggle("active");
  body.classList.toggle("lock");
})
//footer spoilers ========================================================================================================================================================================
function initSpollers() {
  const spollersArray = document.querySelectorAll('[data-spollers]');
  if (spollersArray.length > 0) {
    spollersArray.forEach(spollersBlock => {
      const breakpoint = 560;
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      const mediaQuery = window.matchMedia('(max-width: ' + breakpoint + 'px)');

      function initSpollerBody() {
        if (mediaQuery.matches) {
          spollerTitles.forEach(spollerTitle => {
            spollerTitle.classList.remove('_active');
            const list = spollerTitle.nextElementSibling;
            list.style.maxHeight = '0';
          });
        } else {
          spollerTitles.forEach(spollerTitle => {
            spollerTitle.classList.add('_active');
            const list = spollerTitle.nextElementSibling;
            list.style.maxHeight = list.scrollHeight + 'px';
          });
        }
      }

      initSpollerBody();

      mediaQuery.addListener(initSpollerBody);

      spollerTitles.forEach(spollerTitle => {
        spollerTitle.addEventListener('click', function () {
          const isOpen = this.classList.contains('_active');
          spollerTitles.forEach(title => {
            title.classList.remove('_active');
            const list = title.nextElementSibling;
            list.style.maxHeight = '0';
          });
          if (!isOpen) {
            this.classList.add('_active');
            const list = this.nextElementSibling;
            list.style.maxHeight = list.scrollHeight + 'px';
          }
        });
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initSpollers();
});
