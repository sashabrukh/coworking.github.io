;'use strict';

const preloader = (function () {
  const preloadCont = $('.preloader-container');
  return {
    set: function () {
      var svg = $('.preloader-icon');
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


