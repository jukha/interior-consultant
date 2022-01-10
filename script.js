'use strict';
const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.list');
hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
        list.classList.add('close')
      
        hamburger.classList.remove('pos-fix');
        list.classList.remove('position-fixed');
    }
    else {
        hamburger.classList.add('open');
        hamburger.classList.add('pos-fix');
        list.classList.remove('close');
        list.classList.add('position-fixed');

    }
});

