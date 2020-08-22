var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/****Maps Script *****/
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
  center: [34.8697395, -111.7609896],
  zoom: 5}, {
  searchControlProvider: 'yandex#search'
  }),

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemarkWithContent = new ymaps.Placemark([34.8697395, -111.7609896], {
  iconLayout: 'default#imageWithContent',
  iconImageHref: 'https://cdn4.iconfinder.com/data/icons/map-pins-2/256/21-512.png',
  iconImageSize: [48, 48],
  iconImageOffset: [-27, -48],
  iconContentOffset: [15, 15],
  iconContentLayout: MyIconContentLayout
  });
  myMap.geoObjects
  .add(myPlacemarkWithContent);
  });
