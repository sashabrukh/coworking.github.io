;'use strict';

var blur = (function () {
  var wrapper = document.querySelector('.my-works__contacts-form-wrapper');
  var form = document.querySelector('.my-works__contacts-form');

  return {
    set: function () {
      var imgWidth = document.querySelector('.my-works__contacts-container').offsetWidth,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCss = form.style;

      blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
      blurCss.backgroundPosition = posLeft + 'px' + posTop + 'px';
    }
  }
})();

blur.set();

window.onresize = function () {
  blur.set();
};
