;'use strict';
  
const preloader = (function() {
  const preloadImg = document.getElementsByTagName('*');
  const preloadBlock = document.querySelector('.preloader-container');
  const preloadText = document.querySelector('.preloader-text');
  const regImgUrl = /background-image: url\(['"]?(.*?)['"]?\)/i;
  const body = document.body;
  const imgArr = [];
  let progress = 0;
  let img;
  let allImg;
  let shadowImg;

  return {
    shadowImgAdd: function() {
      shadowImg = document.createElement('img');
      shadowImg.setAttribute('src', img);
      imgArr.push(shadowImg);

    },

    show: function() {
      body.style.overflow = 'hidden';

      return new Promise((resolve, reject) => {
        for (let i = 0; i < preloadImg.length; i++) {
          if (preloadImg[i].matches('img')) {
            img = preloadImg[i].getAttribute('src');
            this.shadowImgAdd();
          } else if (preloadImg[i].hasAttribute('style') && regImgUrl.test(preloadImg[i].getAttribute('style'))) {
            img = (preloadImg[i].getAttribute('style').slice(22, -2));
            this.shadowImgAdd();
          }

          allImg = 100 / imgArr.length;

          for (let j = 0; j < imgArr.length; j++) {
            // preloadText.innerText = `${Math.ceil(progress)}%`;
            imgArr[j].onload = function () {
              progress += allImg;
              if (progress < 100) {
                preloadText.innerText = Math.ceil(progress) + '%';
              } else {
                progress = 100;
                preloadText.innerText = progress + '%';
              }

              if(Math.ceil(progress) === 100) {
                resolve();
              }
            };
          }
        }
      }).then(function() {
        preloadBlock.style.display = 'none';
        body.style.overflow = 'auto';
      });
    },
  };
})();

preloader.show();

