'use strict';

const input = document.querySelector('.input');

function onChange(event) {
  console.log(event.target.value);
}

function debounce(f, delay) {
  let timer = 0;

  return function(...params) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(...params);
    }, delay);
  }
}

const wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);