;'use strict';
const windowWidth = window.innerWidth;
// img(src = '', id = `parallax__image${i}`, alt = 'parallax-img').parallax__image
const parallax = (function () {
  const parallaxImages = document.querySelectorAll('.parallax__image');
  const parallaxLayer = document.querySelectorAll('.parallax__layer');
  return {
    addSrcToParallaxImg: function () {
      if (innerWidth > 1200) {
        for (let i = 0; i < parallaxLayer.length; i++) {
          let img = document.createElement('img');
          img.setAttribute('src', `../../img/parallax/${i}.png`);
          img.setAttribute('alt', 'parallax-img');
          img.classList.add('parallax__image');
          img.id = `parallax__image${i}`;
          parallaxLayer[i].appendChild(img)
        }
      }
    }
  }
})();

parallax.addSrcToParallaxImg();




const parallaxCont = document.getElementById('parallax');

if (parallaxCont && windowWidth > 1200) {
//parallax mousenove
  const layers = parallaxCont.children;
  const moveLayers = e => {
    const initialX = window.innerWidth / 2 - e.pageX;
    const initialY = window.innerHeight / 2 - e.pageY;
    Array.from(layers).forEach(function(layer, i) {

      const divider = i / 100 ;

      const positionX = initialX * divider;
      const positionY = initialY * divider;

      layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
  }
  window.addEventListener('mousemove', moveLayers);
};









