;'use strict';


const indexAnimate = (function () {
  const welcome = $('.welcome-form__container');
  const link = $('.js-welcome-link');
  const linkBack = $('.log-form__to-main');
  const anim = 'run-index-animation';
  const animback = 'run-index-animation-back';


  return {

    start: (function () {

      link.click(function (e) {
        e.preventDefault();
        if (welcome.hasClass(anim)) {
          welcome.removeClass(anim);
        }
        if (welcome.hasClass(animback)) {
          welcome.removeClass(animback);
        }
        welcome.addClass(anim);
        $.when(link.animate({opacity: 0.0}, 700)).then(function () {
          link.hide();
        })
      });

      linkBack.click(function (e) {
        console.log('sss')
        e.preventDefault();
        welcome.addClass(animback);
        $.when(link.show()).then(function () {
          link.animate({opacity: 1}, 700)
        })
      });

    })
  }

})();

indexAnimate.start();


