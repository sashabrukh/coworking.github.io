;'use strict'
const wrapperMain = document.querySelector('.my-works__about');
const windowWidth = document.body.clientWidth;

if (wrapperMain) {
  const showAndHide = (function () {

    const items = ['.my-works__about-comment-item.first', '.my-works__about-comment-item.second'];
    const randItems = Math.floor(Math.random() * 2);
    const commentItem = document.querySelector(items[randItems]);

    return {
      start: function () {
        if (windowWidth < 770) {
        commentItem.style.display = 'none';
        }
      }
    }
  })()
  
  
  window.onload = showAndHide.start();
  }


