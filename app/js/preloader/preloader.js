;'use strict';

const preloader = (function () {
  const body = document.body;
  const preloadCont = document.querySelector('.preloader-container');
  const preloaderText = document.querySelector('.preloader-text');
  const img = document.querySelectorAll('img');
  let progress = 0;
  const imgArr = [];

  for (let i = 0; i < img.length; i++) {
      imgArr.push(img[i]);
  }


  const allImg = 100 / imgArr.length + 2;

  console.log(imgArr.length)

  return {
    set: function () {
      return new Promise(function (resolve, reject) {
        body.style.overflow = 'hidden';
        for (let j = 0; j < img.length; j++) {
          imgArr[j].onload = function () {
            console.log(progress)
            progress += allImg;
            if (progress < 100) {
              preloaderText.innerText = Math.ceil(progress) + '%';
            } else {
              progress = 100;
              preloaderText.innerText = Math.ceil(progress) + '%';
            }
            console.log(progress)
            if (Math.ceil(progress) === 100) {
              resolve();
            }
          };
        }
      }).then(function () {
        preloadCont.style.display = 'none';
        body.style.overflow = 'auto';
      })
    }
  }
})();

preloader.set();


