'use strict';

const filterBtn = document.querySelector('.menu-btn');
const filterMobile = document.querySelector('.filter-mobile');
const menuImg = document.querySelector('.menu-btn img');

filterBtn.addEventListener('click', () => {
  filterMobile.classList.toggle('toggle-view');
  menuImg.classList.toggle('rotate-img');
});
