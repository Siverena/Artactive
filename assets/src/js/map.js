(function() {
  'use strict';

  var mapView = function() {
    ymaps.ready(function() {
      var myMap = new ymaps.Map("map", {
        center: [57.65844623, 39.84603316],
        zoom: 16,
        controls: []
      });
      var myPlacemark = new ymaps.Placemark([57.657124, 39.845861], {}, {
        iconLayout: "default#image",
        iconImageHref: "./img/placemarker.svg",
        iconImageSize: [25, 38],
        iconImageOffset: [-12, -38]
      });
      myMap.geoObjects.add(myPlacemark);
      window.onresize = function() {
        if (document.documentElement.clientWidth >= 750) {
          myMap.setCenter([57.65691518, 39.84079996]);
        } else {
          myMap.setCenter([57.65844623, 39.84603316]);
        }
      };
    });
  }
  mapView();
}());