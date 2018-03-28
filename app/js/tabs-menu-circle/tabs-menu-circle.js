;'use strict';

const circleMenuLinks = $('.blog__content-tab-item-link');
const themes = $('.blog__theme');

themes.waypoint(function () {
  const hash = $(this).attr('id');
  console.log($(this));
  console.log(hash);
  $.each(circleMenuLinks, function () {
    if ( $(this).attr('href') === hash) {

    }
  })
});

const menu = $('.blog__content-tab-cont');
if (menu) {

  const scrollMenu = $(function() {
    $(circleMenuLinks).click(function(e) {
      const destination = $(this).attr('href');
      const offsetTop = $(destination).offset().top;
      e.preventDefault();
      $('html, body').animate({
        scrollTop: offsetTop
      }, 500);
    });
  });

  const windowWidth = $(window).width();
  const fixedMenu = $('.blog__content-tab-cont-fixed');
  const fixedClass = fixedMenu.hasClass('js-fixed-menu');
  fixedMenu.removeClass('js-fixed-menu');
  console.log(fixedClass);
  if (windowWidth > 1200) {
    window.onscroll = function () {
      const wScroll = window.pageYOffset;
      if (wScroll >= 700) {
        fixedMenu.addClass('js-fixed-menu');
      }
      if (wScroll < 700) {
        fixedMenu.removeClass('js-fixed-menu');
      }
    }
  }

    const animateCircleMenu = (function tabMenuCircle() {
      const circle = $('.blog__content-tab-circle');
      var isMenuShow = false;
      function changeMenuWidth(width) {
        menu.css('width', width + 'px');
      }

      if (isMenuShow) {
        circle.click(function () {
          changeMenuWidth(0);
          isMenuShow = false;
          console.log(isMenuShow);
          console.log('ckick');
        })
      }
      if (!isMenuShow) {
        circle.click(function () {
          changeMenuWidth(350);
          isMenuShow = true;
          console.log(isMenuShow);
        });
      }

      $(document).click(function (e) { // событие клика по веб-документу;
        if (!menu.is(e.target) // если клик был не по нашему блоку
          && menu.has(e.target).length === 0 && isMenuShow) { // и не по его дочерним элементам
          changeMenuWidth(0);
          isMenuShow = false;
          console.log(isMenuShow);
        }
      });
    })();
}


const animateScroll = (function () {
  var wScroll = window.pageYOffset;
  console.log(wScroll);
});
