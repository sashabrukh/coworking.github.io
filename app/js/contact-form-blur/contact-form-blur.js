;'use strict';
const wrapperMain = document.querySelector('.my-works__about');

if (wrapperMain) {
  const blur = (function () {

    const wrapper = document.querySelector('.blur');
    const form = document.querySelector('.my-works__contacts-form');

    return {
      set: function () {

        var imgWidth = document.querySelector('.my-works__about').offsetWidth,
          posLeft = -form.offsetLeft,
          posTop = -form.offsetTop,
          blurCss = wrapper.style;
        
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

