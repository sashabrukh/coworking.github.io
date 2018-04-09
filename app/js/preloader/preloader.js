;'use strict';

const preloader = (function () {
  const body = document.body;
  const preloadCont = document.querySelector('.preloader-container');
  const preloaderText = document.querySelector('.preloader-text');
  const img = document.querySelectorAll('img');
  let progress = 0;
  let loadedImg = 0;
  let imgSum = 23;
  const imgArr = [];

  for (let i = 0; i < img.length; i++) {
      imgArr.push(img[i]);
  }
  console.log('count of images ' + imgArr.length)
  console.log(imgArr)

  const allImg = 100 / imgArr.length + 1;


  return {
    set: function () {
      return new Promise(function (resolve, reject) {
        body.style.overflow = 'hidden';
        preloadCont.style.display = 'block';
        for (let j = 0; j < imgArr.length; j++) {
          imgArr[j].onload = function () {
            progress += allImg;
            loadedImg += 1;
            console.log( loadedImg + ' image is load')
            if (progress < 100) {
              preloaderText.innerText = Math.ceil(progress) + '%';
            } else {
              progress = 100;
              preloaderText.innerText = Math.ceil(progress) + '%';
            }
            if (loadedImg === imgArr.length || progress === 100) {
              resolve();
              console.log('progress = ' + progress)
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





