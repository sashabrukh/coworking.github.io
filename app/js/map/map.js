;'use strict';

const map = document.querySelector('#map');

if (map) {
  ymaps.ready(init);
  function init() {
    const map = new ymaps.Map('map', {
      center: [59.94, 30.32],
      zoom: 12,
      controls: ['zoomControl'],
      behaviors: []
    });
  }
}




