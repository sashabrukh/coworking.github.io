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
};









