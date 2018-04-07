;'use strict';

const preloader = (function () {
  const preloadCont = $('.preloader-container');
  const svg = $('.preloader-icon');
  const imgLength = $('img').length;
  const percent = 100 / imgLength;
  console.log(percent);

  return {
    set: function () {
        svg.animate({
          strokeDashoffset: '0'
        }, 1000);
        document.body.style.overflow = 'hidden';

      $(window).on('load', function () {
        document.body.style.overflow = 'auto';
        preloadCont.fadeOut();
      })
    }
  }
})();

preloader.set();


