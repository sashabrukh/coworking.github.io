;'use strict';

const parallaxCont = document.getElementById('parallax');
const layers = parallaxCont.children;
console.log(layers);

const moveLayers = e => {
  const initialX = window.innerWidth / 2 - e.pageX;
  const initialY = window.innerHeight / 2 - e.pageY;
  Array.from(layers).forEach(function(layer, i) {
    i = 2;
    const divider = i / 100;
    const positionX = initialX * divider;
    const positionY = initialY * divider;

    layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
  });
}


window.addEventListener('mousemove', moveLayers);