'use strict';

const divBlue = document.querySelector('.js_blue');

function handleMousemove() {
  divBlue.classList.toggle('blue');
}

divBlue.addEventListener('mousemove', handleMousemove);
