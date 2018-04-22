;'use strict';
const wrapperMain = document.querySelector('.my-works__about');

if (wrapperMain) {
  const blur = (function () {

    const wrapper = document.querySelector('.blur');
    const form = document.querySelector('.my-works__contacts-form-wrapper');

    return {
      set: function () {

        var imgWidth = document.querySelector('.my-works__about').offsetWidth,
          imgHeight = document.querySelector('.my-works__about').offsetHeight,
          posLeft = -form.offsetLeft,
          posTop = -form.offsetTop,
          blurCss = wrapper.style;
        
        blurCss.backgroundSize = imgWidth + 'px' + ' ' + imgHeight + 'px';
        blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
      }
    }
  })();

  blur.set();
  window.onresize = blur.set;
}

