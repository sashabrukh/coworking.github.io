"use strict";var currentWidth=document.body.offsetWidth,tabletWidth=768;$("[data-index]").on("click",function(e){var t=parseInt($(e.currentTarget).attr("data-index"));$.fn.moveTo(t)}),$(".main").onepage_scroll({sectionContainer:"section",easing:"ease",animationTime:500,pagination:!0,updateURL:!1,beforeMove:function(e){},afterMove:function(e){},loop:!1,keyboard:!0,responsiveFallback:768,direction:"vertical"}),$(".btn").on("click",function(){currentWidth<=tabletWidth?$(".btn").attr("href","#contacts"):$(".btn").removeAttr("href","#contacts")}),$(".btn-down__link").on("click",function(){currentWidth<=tabletWidth?$(".btn-down__link").attr("href","#features"):$(".btn-down__link").removeAttr("href","#features")});var mobileMenuCheck=document.querySelector("#checkbox"),mobileMenuCont=document.querySelector("#mobile-cont"),mobileMenuLink=document.getElementsByClassName("mobile-menu-link"),mobileMenuBtn=document.querySelector("#mobile-btn");mobileMenuCheck.addEventListener("click",function(){var e=mobileMenuCont.classList.contains("mobile-menu-container--active");e||(mobileMenuCont.classList.add("mobile-menu-container--active"),document.body.style.overflow="hidden",mobileMenuBtn.classList.add("mobile-menu-btn--active:after"),mobileMenuBtn.classList.add("mobile-menu-btn--active:before"),mobileMenuBtn.classList.add("mobile-menu-btn--active")),e&&(mobileMenuCont.classList.remove("mobile-menu-container--active"),document.body.style.overflow="auto",mobileMenuBtn.classList.remove("mobile-menu-btn--active:after"),mobileMenuBtn.classList.remove("mobile-menu-btn--active:before"),mobileMenuBtn.classList.remove("mobile-menu-btn--active"))});for(var i=0;i<mobileMenuLink.length;i++)mobileMenuLink[i].addEventListener("click",function(){mobileMenuCont.classList.remove("mobile-menu-container--active"),document.body.style.overflow="auto",mobileMenuBtn.classList.remove("mobile-menu-btn--active:after"),mobileMenuBtn.classList.remove("mobile-menu-btn--active:before"),mobileMenuBtn.classList.remove("mobile-menu-btn--active")});for(var accoTeam=document.getElementsByClassName("accordeon-team__desc-people"),_loop=function(e){accoTeam[e].addEventListener("click",function(){var t=this.classList.contains("accordeon-team__desc-people--active");if(!t)for(var n=0;n<accoTeam.length;n++)accoTeam[n].classList.remove("accordeon-team__desc-people--active"),accoTeam[e].classList.add("accordeon-team__desc-people--active");t&&this.classList.remove("accordeon-team__desc-people--active")})},_i=0;_i<accoTeam.length;_i++)_loop(_i);for(var accoMenuBtn=document.getElementsByClassName("accordeon-menu__list-btn"),accoMenuDesc=document.getElementsByClassName("accordeon-menu__hidden-desc"),_loop2=function(e){accoMenuBtn[e].addEventListener("click",function(){for(var t=0;t<accoMenuDesc.length;t++){var n=accoMenuDesc[e].classList.contains("accordeon-menu__hidden-desc--active");if(!n)for(var o=0;o<accoMenuDesc.length;o++)accoMenuDesc[o].classList.remove("accordeon-menu__hidden-desc--active"),accoMenuDesc[e].classList.add("accordeon-menu__hidden-desc--active");n&&accoMenuDesc[e].classList.remove("accordeon-menu__hidden-desc--active")}})},_i2=0;_i2<accoMenuBtn.length;_i2++)_loop2(_i2);for(var burgerMenu=document.getElementsByClassName("carousel-burgers__menu"),burgerMenuList=document.getElementsByClassName("carousel-burgers__menu-list"),_loop3=function(e){burgerMenu[e].addEventListener("click",function(){for(var t=0;t<burgerMenuList.length;t++){var n=burgerMenuList[e].classList.contains("carousel-burgers__menu-list--active");if(!n)for(var o=0;o<burgerMenuList.length;o++)burgerMenuList[o].classList.remove("carousel-burgers__menu-list--active"),burgerMenuList[e].classList.add("carousel-burgers__menu-list--active");n&&burgerMenuList[e].classList.remove("carousel-burgers__menu-list--active")}})},_i3=0;_i3<burgerMenu.length;_i3++)_loop3(_i3);var getBtnMore=document.querySelectorAll(".btn__more"),closeBtn=document.querySelectorAll(".full-review__close"),fullReview=document.querySelectorAll("#full-review"),textTitle=document.querySelectorAll(".comments__title"),textItem=document.querySelectorAll(".comments__text"),addTextItem=document.querySelector(".full-review__content-item"),addTitleItem=document.querySelector(".full-review__title"),commentItem=document.querySelectorAll(".comments__item");$(commentItem).click(function(){var e=$(this).find(textItem).text(),t=$(this).find(textTitle).text();$(addTextItem).text(e),$(addTitleItem).text(t)});for(var _loop4=function(e){getBtnMore[e].addEventListener("click",function(){if(!getBtnMore[e].classList.contains("full-review--active"))for(var t=0;t<fullReview.length;t++)fullReview[t].classList.add("full-review--active"),document.body.style.overflow="hidden"});for(var t=0;t<closeBtn.length;t++)closeBtn[t].addEventListener("click",function(){fullReview[e].classList.remove("full-review--active"),document.body.style.overflow="auto"})},_i4=0;_i4<getBtnMore.length;_i4++)_loop4(_i4);slidr.create("best-burgers__slider").start(),$("#order-form").on("submit",submitForm);function submitForm(e){e.preventDefault();var t=$(e.target);t.serialize(),t.attr("action"),t.attr("method");ajaxForm(t).done(function(e){var n=e.mes;"OK"===e.status?t.append('<p class="success">'+n+"</p>"):t.append('<p class="error">'+n+"</p>")}).fail(function(e,t){alert("Request failed: "+t)})}var ajaxForm=function(e){var t=e.serialize(),n=e.attr("action");return $.ajax({type:"POST",url:n,dataType:"JSON",data:t})};ymaps.ready(init);var placemarks=[{latitude:59.97,longitude:30.31,hintContent:'<div class="map__hint">ул. Литераторов, д. 19</div>',balloonContent:['<div class="map__balloon">','<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',"Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19","</div>"]},{latitude:59.94,longitude:30.25,hintContent:'<div class="map__hint">Малый проспект В О, д 64</div>',balloonContent:['<div class="map__balloon">','<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',"Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64","</div>"]},{latitude:59.93,longitude:30.34,hintContent:'<div class="map__hint">наб. реки Фонтанки, д. 56</div>',balloonContent:['<div class="map__balloon">','<img class="map__burger-img" src="../img/forsprite/png/burger-promo.png" alt="Бургер"/>',"Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56","</div>"]}],geoObjects=[];function init(){for(var e=new ymaps.Map("map",{center:[59.94,30.32],zoom:12,controls:["zoomControl"],behaviors:[]}),t=0;t<placemarks.length;t++)geoObjects[t]=new ymaps.Placemark([placemarks[t].latitude,placemarks[t].longitude],{hintContent:placemarks[t].hintContent,balloonContent:placemarks[t].balloonContent.join("")},{iconLayout:"default#image",iconImageHref:"../img/forsprite/svg/map-marker.svg",iconImageSize:[46,57],iconImageOffset:[-23,-57]});var n=new ymaps.Clusterer({clusterIcons:[{href:"../img/burger-promo.png",size:[100,100],offset:[-50,-50]}],clusterIconContentLayout:null});e.geoObjects.add(n),n.add(geoObjects)}