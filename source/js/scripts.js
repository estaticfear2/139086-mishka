var ESC_CODE = 27;

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var buyLink = document.querySelector('.js-add-to-cart');
var modal = document.querySelector('.modal-content');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var onEscPress = function (evt) {
  if (evt.keyCode == ESC_CODE) {
    modal.classList.remove('modal-content--open');
    document.removeEventListener('keydown', onEscPress);
  }
};

var onOverlayClick = function (evt) {
  var clickedElement = evt.target.closest('.modal-content__wrap');
  if (!clickedElement) {
    modal.classList.remove('modal-content--open');
    modal.removeEventListener('click', onOverlayClick);
  }
};

buyLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-content--open');
  document.addEventListener('keydown', onEscPress);
  modal.addEventListener('click', onOverlayClick);
});
