; 'use strict';

const sectionAbout = document.querySelector('.my-skills');

if (sectionAbout) {
  const parallaxForSectionWorks = (function () {
    const worksUser = document.querySelector('.my-works__header-img');
    const worksTitle = document.querySelector('.my-works__header-my-name');
    const worksText = document.querySelector('.my-works__header-title');

    return {
      move: function (block, windowScroll, strafeAmount) {
        const strafe = windowScroll / -strafeAmount + '%';
        var style = block.style;
        style.transform = 'translateY(' + strafe + ')';
      },
      worksUser: function (wScroll) {
        this.move(worksUser, wScroll, 3);
      },
      worksTitle: function (wScroll) {
        this.move(worksTitle, wScroll, 1);
      },
      worksText: function (wScroll) {
        this.move(worksText, wScroll, 1);
      }
    }

  })();

  window.onscroll = function () {
    const wScroll = window.pageYOffset;
    parallaxForSectionWorks.worksUser(wScroll);
    parallaxForSectionWorks.worksTitle(wScroll);
    parallaxForSectionWorks.worksText(wScroll);
  }
}

