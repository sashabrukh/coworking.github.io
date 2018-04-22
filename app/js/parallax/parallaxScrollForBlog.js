; 'use strict';

const sectionBlog = document.querySelector('.blog__content');
const innerWidth = window.innerWidth;

if (sectionBlog && innerWidth > 800) {
  const parallaxForSectionBlog = (function () {
    const blogUser = document.querySelector('.blog__header-img');
    const blogTitle = document.querySelector('.blog__header-my-name');
    const blogText = document.querySelector('.blog__header-title');

    return {
      move: function (block, windowScroll, strafeAmount) {
        const strafe = windowScroll / -strafeAmount + '%';
        var style = block.style;
        style.transform = 'translateY(' + strafe + ')';
      },
      blogUser: function (wScroll) {
        this.move(blogUser, wScroll, 3);
      },
      blogTitle: function (wScroll) {
        this.move(blogTitle, wScroll, 1);
      },
      blogText: function (wScroll) {
        this.move(blogText, wScroll, 1);
      }
    }

  })();

  window.onscroll = function () {
    const wScroll = window.pageYOffset;
    parallaxForSectionBlog.blogUser(wScroll);
    parallaxForSectionBlog.blogTitle(wScroll);
    parallaxForSectionBlog.blogText(wScroll);
  }
}

