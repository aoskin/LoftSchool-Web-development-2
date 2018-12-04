//YandexMap

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.945834, 30.315856],
      zoom: 12,
      scroll: false
  }, {
      searchControlProvider: 'yandex#search'
  })
  myMap.behaviors.disable('scrollZoom');
  myMap.behaviors.disable('drag');

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([59.94633586, 30.34890400], {
          hintContent: 'Литейный проспект, 8',
          balloonContent: 'Литейный проспект, 8'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/images/icons/map-marker.svg',
          // Размеры метки.
          iconImageSize: [46, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),
      myPlacemark2 = new ymaps.Placemark([59.96321013, 30.31113850], {
          hintContent: 'Большая Пушкарская, 43',
          balloonContent: 'Большая Пушкарская, 43'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/images/icons/map-marker.svg',
          // Размеры метки.
          iconImageSize: [46, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),
      myPlacemark3 = new ymaps.Placemark([59.91074607, 30.31487870], {
          hintContent: 'ул. Егорова, 24',
          balloonContent: 'ул. Егорова, 24'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/images/icons/map-marker.svg',
          // Размеры метки.
          iconImageSize: [46, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),
      myPlacemark4 = new ymaps.Placemark([59.91988285, 30.47830033], {
          hintContent: 'Товарищеский проспект, 27',
          balloonContent: 'Товарищеский проспект, 27'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/images/icons/map-marker.svg',
          // Размеры метки.
          iconImageSize: [46, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      })

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemark2)
      .add(myPlacemark3)
      .add(myPlacemark4)
});


