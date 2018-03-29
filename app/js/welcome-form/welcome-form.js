;'use strict';

const welcome = $('.welcome-form__container');

  const indexAnimate = (function() {

    const link = $('.js-welcome-link');
    const linkBack = $('.log-form__to-main');
    const anim = 'run-index-animation';
    const animback = 'run-index-animation-back';


    return {

      start: (function () {

        link.click(function (e) {
          e.preventDefault();
          if(welcome.hasClass(anim)) {
            welcome.removeClass(anim);
          }
          if(welcome.hasClass(animback)) {
            welcome.removeClass(animback);
          }
          welcome.hasClass(anim) ? welcome.removeClass(anim) : welcome.addClass(anim);
          $.when( link.animate({ opacity: 0.0 }, 700) ).then(function(){
            link.hide();
          })
        });

        linkBack.click(function (e) {
          if(welcome.hasClass('run-index-animation')) {
            console.log('sss')
          }
          if(welcome.hasClass('run-index-animation-back')) {
            console.log('sss')
          }
          e.preventDefault();
          welcome.hasClass(animback) ? welcome.removeClass(animback) : welcome.addClass(animback);
          $.when( link.animate({ opacity: 1 }, 700) ).then(function(){
            link.show();
          })
        });

      })
    }

  })();


if (welcome) {
  indexAnimate.start();
}

