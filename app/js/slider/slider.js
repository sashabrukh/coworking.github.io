;'use strict';

const myWorks = document.querySelector('.my-works__works-name');

if (myWorks) {
  const mainSlider = (function () {
    const slides = [
      {
        title: 'Burgers Landing',
        image: '../../img/portfolio/burgers.jpg',
        description: 'SCSS, BEM, Javascript, jQuery, Gulp, Adaptive design',
        link: 'https://albru.ru/portfolio/burgers/index.html'
      },

      {
        title: 'Coworking',
        image: '../../img/portfolio/coworking.jpg',
        description: 'Статичный сайт из 4х страниц',
        link: 'https://albru.ru/portfolio/coworking/index.html'
      },

      {
        title: 'Сайт в разработке',
        image: '../../img/portfolio/healday.jpg',
        description: 'VUE, Javascript, SCSS, Pug, Webpack',
        link: '#'
      }
    ];

    const slider = document.querySelector('.js-slider'),
      worksLink = slider.querySelector('.my-works__works-link'),
      descTitle = slider.querySelector('.my-works__works-name'),
      descText = slider.querySelector('.my-works__works-tech-item'),
      mainImgLeft = slider.querySelector('.js-main-img-left'),
      mainImgCenter = slider.querySelector('.js-main-img-center'),
      mainImgRight = slider.querySelector('.js-main-img-right'),
      leftImgLeft = slider.querySelector('.js-left-img-left'),
      leftImgCenter = slider.querySelector('.js-left-img-center'),
      leftImgRight = slider.querySelector('.js-left-img-right'),
      rightImgLeft = slider.querySelector('.js-right-img-left'),
      rightImgCenter = slider.querySelector('.js-right-img-center'),
      rightImgRight = slider.querySelector('.js-right-img-right'),
      upBtn = slider.querySelector('.js-slider-up'),
      downBtn = slider.querySelector('.js-slider-down'),
      slidesLength = slides.length;
    let currentSlide = 0;



    function slideLimiter(value) {
      if (value >= slidesLength) {
        return 0;
      } else if (value < 0) {
        return slidesLength - 1;
      } else {
        return value;
      }
    }

    function fillSlider() {
      var prev = slideLimiter(currentSlide - 1),
        next = slideLimiter(currentSlide + 1);

      function sliderAddImg(cont, val) {
        var img = document.createElement('img');
        if (cont.childNodes.length >= 1) {
          cont.removeChild(cont.firstChild);
        }
        img.setAttribute('src', slides[val].image);
        img.classList.add('js-images');
        cont.appendChild(img);
      }

      function sliderAddDesc(titleCont, descCont, val) {
        titleCont.innerText = slides[val].title;
        descCont.innerText = slides[val].description;
        worksLink.setAttribute('href', slides[val].link);
        worksLink.setAttribute('target', '_blank');
      }

      sliderAddDesc(descTitle, descText, currentSlide);
      sliderAddImg(mainImgLeft, prev);
      sliderAddImg(mainImgCenter, currentSlide);
      sliderAddImg(mainImgRight, next);
      sliderAddImg(leftImgLeft, prev);
      sliderAddImg(leftImgCenter, next);
      sliderAddImg(leftImgRight, currentSlide);
      sliderAddImg(rightImgLeft, next);
      sliderAddImg(rightImgCenter, prev);
      sliderAddImg(rightImgRight, currentSlide);
    }

    return {
      handlers: function () {
        fillSlider();
        upBtn.addEventListener('click', function () {
          currentSlide = slideLimiter(currentSlide + 1);
          fillSlider();
        });

        downBtn.addEventListener('click', function () {
          currentSlide = slideLimiter(currentSlide - 1);
          fillSlider();
        });
      }
    }
  })();

  window.onload = mainSlider.handlers();
}








