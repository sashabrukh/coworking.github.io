;'use strict';

const preloader = (function () {
  const body = document.body;
  const preloadCont = document.querySelector('.preloader-container');
  const preloaderText = document.querySelector('.preloader-text');
  let img = document.querySelectorAll('img');
  let progress = 0;
  let loadedImg = 0;
  const imgArr = [];


  for (let i = 0; i < img.length; i++) {
      imgArr.push(img[i]);
  }

  for (var k = 0; k < imgArr.length; k++) {
    
  }

  console.log('count of images: ' + imgArr.length);


  const allImg = 100 / imgArr.length;


  return {
    set: function () {
      return new Promise(function (resolve, reject) {
        body.style.overflow = 'hidden';
        preloadCont.style.display = 'block';
        console.log(imgArr);
        for (let j = 0; j < imgArr.length; j++) {
          imgArr[j].onload = function () {

            progress += allImg;
            loadedImg += 1;
            console.log(Math.ceil(progress))
            console.log( imgArr[j] + ' ' + loadedImg +  ' image is load');
            if (progress < 100) {
              preloaderText.innerText = Math.ceil(progress) + '%';
            } else {
              progress = 100;
              preloaderText.innerText = Math.ceil(progress) + '%';
            }
            if (loadedImg === imgArr.length || Math.ceil(progress) === 100) {
              resolve();
            }
          }
        }
      }).then(function () {
        preloadCont.style.display = 'none';
        body.style.overflow = 'auto';
      })
    }
  }
})();

preloader.set();







