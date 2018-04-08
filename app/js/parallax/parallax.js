;'use strict';

const parallaxCont = document.getElementById('parallax');



if (parallaxCont) {
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
//parallax scroll
  const parallax = (function () {
    const user = document.querySelector('.my-works__header-img-cont');
    const title = document.querySelector('.my-works__header-my-name');
    const text = document.querySelector('.my-works__header-title');

    return {
      move: function (block, windowScroll, strafeAmount) {
        const strafe = windowScroll / -strafeAmount + '%';
        var style = block.style;
        style.top = strafe;
        console.log(style)
      },

      init: function (wScroll) {
        this.move(user, wScroll, 45);
      }
    }
  })();

  window.onscroll = function () {
    const wScroll = window.pageYOffset;
    parallax.init(wScroll);
  }



}




