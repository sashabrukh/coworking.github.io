;'use strict';

const preloader = (function () {
  const preloadCont = $('.preloader-container');
  const svg = $('.preloader-icon');
  return {
    set: function () {
      var svg = $('.preloader-icon');
      svg.animate({
        strokeDashoffset: '0',
        strokeDasharray: '1000'
      }, 3000);
      console.log(svg);
      document.body.style.overflow = 'hidden';
      window.addEventListener('load', function () {
        document.body.style.overflow = 'auto';
        preloadCont.hide();
      })
    }
  }
})();

preloader.set();


