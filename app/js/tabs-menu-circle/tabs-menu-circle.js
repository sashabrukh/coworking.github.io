;'use strict';


const tracked = $('.blog__theme');
const navPoints = $('.blog__content-tab-item');

tracked.waypoint(function () {
  const hash = $(this).attr('id');
  alert(hash);
  $.each(navPoints, function () {
    if ($(this).children('a').attr('href').slice(1) === hash) {
      alert('ssss');
    }
  })
});

const menu = $('.blog__content-tab-cont');

if (menu) {

  const circleMenuLinks = $('.blog__content-tab-item-link');

  const scrollMenu = $(function () {
    $(circleMenuLinks).click(function (e) {
      const destination = $(this).attr('href');
      const offsetTop = $(destination).offset().top;
      e.preventDefault();
      $('html, body').animate({
        scrollTop: offsetTop
      }, 500);
    });
  });

  const windowWidth = $(window).width();
  if (windowWidth > 1200) {
    window.onscroll = function () {
      const wScroll = window.pageYOffset;
      const fixedMenu = $('.blog__content-tab-cont-fixed');
      if (wScroll >= 700) {
        fixedMenu.addClass('js-fixed-menu');
      }
      else {
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
