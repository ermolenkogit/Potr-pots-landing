'use strict';

const menuBtn = document.getElementById('header__menu-btn'),
  headerClose = document.getElementById('nav'),
  menuCloseBtn = document.getElementById('nav__close-btn');

menuBtn.onclick = function (event) {
  headerClose.classList.add('nav--active');
};

menuCloseBtn.onclick = function (event) {
  headerClose.classList.remove('nav--active');
};

const form = document.querySelector('.contacnt-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.form-input');

  for (const input of inputs) {
    input.value = '';
  }
});

// WEBP support definition function

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
