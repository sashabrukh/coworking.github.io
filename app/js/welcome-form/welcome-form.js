;'use strict';

let welcome = $('.js-welcome-form');

if (welcome.length) {

  var indexAnimate = (function() {

    let link = $('.js-welcome-link');
    let linkBack = $('.log-form__to-main');
    let anim = 'run-index-animation';
    let animback = 'run-index-animation-back';

    if(welcome.hasClass(anim)) { welcome.removeClass(anim)}
    if(welcome.hasClass(animback)) { welcome.removeClass(animback)}

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

}








