;'use strict';

const arrowsScroll = (function () {

  return {
    init: function (elem) {
      elem.click(function (e) {
        const destination = $(this).attr('href');
        const offsetTop = $(destination).offset().top;
        e.preventDefault();
        $('html, body').animate({
          scrollTop: offsetTop
        }, 500);
      })
    }
  }
})();

const elemDown = $('.my-works__header-down-link');
const elemUp = $('.my-works__about-up-link');

window.onload = arrowsScroll.init(elemDown);
window.onload = arrowsScroll.init(elemUp);