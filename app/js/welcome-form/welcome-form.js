;'use strict';

var indexAnimate = (function() {

  let welcome = $('.welcome-form__container');
  let link = $('.welcome__link');
  let linkBack = $('.log-form__to-main');
  let anim = 'run-index-animation';
  let animback = 'run-index-animation-back';

  link.click(function (e) {
    e.preventDefault();
    welcome.hasClass(anim) ? welcome.removeClass(anim) : welcome.addClass(anim);
    $.when( link.animate({ opacity: 0.0 }, 700) ).then(function(){
      link.hide();
      })
    });


  linkBack.click(function (e) {
    e.preventDefault();
    welcome.hasClass(animback) ? welcome.removeClass(animback) : welcome.addClass(animback);
    $.when( link.animate({ opacity: 1 }, 700) ).then(function(){
      link.show();
    })
  });

})();






