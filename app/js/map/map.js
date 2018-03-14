;'use strict';

const map = document.querySelector('#map');

if (map) {

  ymaps.ready(init);

// let placemarks = [{
//     latitude: 59.97,
//     longitude: 30.31,
//     hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
//     balloonContent: [
//       '<div class="map__balloon">',
//       '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
//       'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
//       '</div>'
//     ]
//   },
//     {
//       latitude: 59.94,
//       longitude: 30.25,
//       hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
//       balloonContent: [
//         '<div class="map__balloon">',
//         '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
//         'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
//         '</div>'
//       ]
//     },
//     {
//       latitude: 59.93,
//       longitude: 30.34,
//       hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
//       balloonContent: [
//         '<div class="map__balloon">',
//         '<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',
//         'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
//         '</div>'
//       ]
//     }
//   ],
//   geoObjects = [];

  function init() {
    const map = new ymaps.Map('map', {
      center: [59.94, 30.32],
      zoom: 12,
      controls: ['zoomControl'],
      behaviors: []
    });

    // for (let i = 0; i < placemarks.length; i++) {
    //   geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
    //     hintContent: placemarks[i].hintContent,
    //     balloonContent: placemarks[i].balloonContent.join('')
    //   }, {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'img/sprites/map-marker.svg',
    //     iconImageSize: [46, 57],
    //     iconImageOffset: [-23, -57]
    //   });
    // }

    // const clusterer = new ymaps.Clusterer({
    //   clusterIcons: [{
    //     href: 'img/burger-promo.png',
    //     size: [100, 100],
    //     offset: [-50, -50]
    //   }],
    //   clusterIconContentLayout: null
    // });
    //
    // map.geoObjects.add(clusterer);
    // clusterer.add(geoObjects);
  }



}

