// ;'use strict';
//
// const myWorks = document.querySelector('.my-works__works-name');
//
// const mainSlider = (function () {
//   const slides = [
//     {
//       title: 'Lending 1',
//       image: 'https://i.ytimg.com/vi/dmZ-jmxJi1A/maxresdefault.jpg',
//       description: 'Описание 1',
//       tags: ['js', 'pug']
//     },
//
//     {
//       title: 'Lending 2',
//       image: 'https://cdn.afigenchik.ru/wp-content/uploads/2017/04/58f75184c1042_KPmhEsW__605.jpg',
//       description: 'Описание 2',
//       tags: ['js', 'pug']
//     },
//
//     {
//       title: 'Lending 3',
//       image: 'https://veterinargid.ru/wp-content/uploads/2016/02/perhot-u-sobaki-prichiny.jpg',
//       description: 'Описание 3',
//       tags: ['js', 'pug']
//     },
//
//     {
//       title: 'Lending 4',
//       image: 'http://wexplain.ru/wp-content/uploads/2014/01/120913192533.jpg',
//       description: 'Описание 4',
//       tags: ['js', 'pug']
//     }
//   ];
//
//   const slider = document.querySelector('.js-slider'),
//     descTitle = slider.querySelector('.my-works__works-name'),
//     descText = slider.querySelector('.my-works__works-tech-item'),
//     mainImgLeft = slider.querySelector('.js-main-img-left'),
//     mainImgCenter = slider.querySelector('.js-main-img-center'),
//     mainImgRight = slider.querySelector('.js-main-img-right'),
//     leftImgLeft = slider.querySelector('.js-left-img-left'),
//     leftImgCenter = slider.querySelector('.js-left-img-center'),
//     leftImgRight = slider.querySelector('.js-left-img-right'),
//     rightImgLeft = slider.querySelector('.js-right-img-left'),
//     rightImgCenter = slider.querySelector('.js-right-img-center'),
//     rightImgRight = slider.querySelector('.js-right-img-right'),
//     upBtn = slider.querySelector('.js-slider-up'),
//     downBtn = slider.querySelector('.js-slider-down'),
//     slidesLength = slides.length;
//     let currentSlide = 0;
//
//
//   function slideLimiter(value) {
//     if (value >= slidesLength) {
//       return 0;
//     } else if (value < 0) {
//       return slidesLength - 1;
//     } else {
//       return value;
//     }
//   }
//
//   function fillSlider() {
//     var prev = slideLimiter(currentSlide - 1),
//       next = slideLimiter(currentSlide + 1);
//
//     function sliderAddImg(cont, val) {
//       var img = document.createElement('img');
//       if (cont.childNodes.length >= 1) {
//         cont.removeChild(cont.firstChild);
//       }
//       img.setAttribute('src', slides[val].image);
//       img.classList.add('js-images');
//       cont.appendChild(img);
//     }
//
//     function sliderAddDesc(titleCont, descCont, val) {
//       titleCont.innerText = slides[val].title;
//       descCont.innerText = slides[val].description;
//     }
//
//     sliderAddDesc(descTitle, descText, currentSlide);
//     sliderAddImg(mainImgLeft, prev);
//     sliderAddImg(mainImgCenter, currentSlide);
//     sliderAddImg(mainImgRight, next);
//     sliderAddImg(leftImgLeft, prev);
//     sliderAddImg(leftImgCenter, next);
//     sliderAddImg(leftImgRight, currentSlide);
//     sliderAddImg(rightImgLeft, next);
//     sliderAddImg(rightImgCenter, prev);
//     sliderAddImg(rightImgRight, currentSlide);
//   }
//
//   return {
//     handlers: function () {
//       fillSlider();
//       upBtn.addEventListener('click', function () {
//         currentSlide = slideLimiter(currentSlide + 1);
//         fillSlider();
//       });
//
//       downBtn.addEventListener('click', function () {
//         currentSlide = slideLimiter(currentSlide - 1);
//         fillSlider();
//       });
//     }
//   }
// })();
//
// mainSlider.handlers();
//
//
//
//
//
