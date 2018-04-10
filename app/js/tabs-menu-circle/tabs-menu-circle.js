;'use strict';
const windowWidth = $(window).width();

const tabsMenu = (function () {
  const tabMainCont = $('.tab-container');
  const circleMenuLinks = $('.blog__content-tab-item-link');
  const menu = $('.blog__content-tab-cont');
  const themes = $('.blog__theme');
  const circle = $('.blog__content-tab-circle');
  let isMenuShow = false;
  const fixedElem = $('.blog__content-tab-cont-fixed');
  const fixedClass = 'js-fixed-menu';
  const waypLinks = $('.blog__content-tab-item-link');
  const fixedMenuWidth = tabMainCont.innerWidth() * 0.15;



  function changeMenuWidth(width) {
    menu.css('width', width + 'px');
  }

  return {

    wayp: function () {
      themes.waypoint({

        handler: function (direction) {
          const hash = this.element.id;
          const activeClass = 'js-tab-item-link';
          waypLinks.removeClass(activeClass);
          $.each(waypLinks, function (direction) {
            if ($(this).attr('href').slice(1) === hash) {
              $(this).addClass(activeClass);
            }
          })

        },
        offset: '5'
      })

    },

    scrollMenu: function () {
      $(circleMenuLinks).click(function (e) {
        const destination = $(this).attr('href');
        const offsetTop = $(destination).offset().top;
        e.preventDefault();
        $(window).bind('mousewheel', function(e) {
          
        })
        $('html, body').animate({
          scrollTop: offsetTop 
        }, 500);
      })
    },

    animateCircleMenu: function () {

      circle.click(function () {
        switch (isMenuShow) {
          case false:
            changeMenuWidth(350);
            isMenuShow = true;
            break;
          case true:
            changeMenuWidth(0);
            isMenuShow = false;
            break;
        }
      });

      $(document).click(function (e) { // событие клика по веб-документу;
        if (!menu.is(e.target) // если клик был не по нашему блоку
          && menu.has(e.target).length === 0 && isMenuShow) { // и не по его дочерним элементам
          changeMenuWidth(0);
          isMenuShow = false;
        }
      })
    },

    fixedMenu: function () {
      if (fixedElem.hasClass(fixedClass)) {
        fixedElem.removeClass(fixedClass)
      }
      if (windowWidth > 1200) {
        $(window).scroll(function () {
          const wScroll = window.pageYOffset;
          if (wScroll >= 700) {
            fixedElem.addClass('js-fixed-menu');
            fixedElem.width(fixedMenuWidth);

          }
          if (wScroll < 600) {
            fixedElem.removeClass('js-fixed-menu');
          }
        })
      }
    }
  }
})();


tabsMenu.animateCircleMenu();
tabsMenu.scrollMenu();
if(windowWidth > 1200) {
  tabsMenu.wayp();
}
tabsMenu.fixedMenu();




// const animateScroll = (function () {
//
//   $(window).scroll(function () {
//     var wScroll = window.pageYOffset;
//     console.log(wScroll);
//   })
// });
// animateScroll();