;'use strict';
const wrapper = document.querySelector('.my-works__about');

if (wrapper) {
  const blur = (function () {

    const wrapper = document.querySelector('.my-works__contacts-form-wrapper');
    const form = document.querySelector('.my-works__contacts-form');

    return {
      set: function () {
        var imgWidth = document.querySelector('.my-works__about-blur').offsetWidth,
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
}

