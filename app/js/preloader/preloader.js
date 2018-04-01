;'use strict';

const preloader = (function () {
  const preloadCont = $('.preloader-container');
  const svg = $('.preloader-icon');
  const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  return {
    set: function () {
      svg.animate({
        strokeDashoffset: '0'
      }, 1000);
      document.body.style.overflow = 'hidden';

      window.addEventListener('load', function () {
        document.body.style.overflow = 'auto';
        preloadCont.hide();
      })
    }
  }
})();

preloader.set();


