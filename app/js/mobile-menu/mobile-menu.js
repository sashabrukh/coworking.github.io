;'use strict';

const mobileMenuCont = document.querySelector('#mobile-cont');

const mobMenu = (function mobileMenu() {
  const mobileMenuCheck = document.querySelector('#mobile-checkbox');
  const mobileMenuLink = document.querySelectorAll('.mobile-menu__link');
  const mobileMenuBtn = document.querySelector('#mobile-btn');
  const textOpacity = [{
    opacity: 0.5
  }];

  return {
    init: function () {
      mobileMenuCheck.addEventListener('click', function () {
        const activeClass = mobileMenuCont.classList.contains('mobile-menu__container--active');
        if (!activeClass) {
          mobileMenuCont.classList.add('mobile-menu__container--active');
          document.body.style.overflow = 'hidden';
          mobileMenuBtn.classList.add('mobile-menu__btn--active');
        }
        if (activeClass) {
          mobileMenuCont.classList.remove('mobile-menu__container--active');
          document.body.style.overflow = 'auto';
          mobileMenuBtn.classList.remove('mobile-menu__btn--active');
        }
      });


    },

    animate: function () {
      function animateText(index) {
        const promise = new Promise(function (resolve) {
          mobileMenuLink[index].style.opacity = 1;
          setTimeout(function () {
            resolve();
          }, 150);
        });
        return promise;
      }

      mobileMenuCheck.addEventListener('click', function () {
        const timerId = setTimeout(function () {
          animateText(0)
            .then(function () {
              return animateText(1)
            }).then(function () {
            return animateText(2)
          }).then(function () {
            return animateText(3)
          })
        }, 200);
      });
    }
  }

})();

if (mobileMenuCont) {
  mobMenu.init();
  mobMenu.animate();
}




