$(function () {
  $(".menu-list a, .footer__link").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 2000);
  });

  $(".blog__slider-inner").slick({
    dots: true,
    arrows: false,
  });

  $(".menu__btn, .menu__list, a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  let count = 0;

  window.addEventListener("scroll", function () {
    const heigth = document.querySelector(".header").clientHeight;
    const menu = document.querySelector(".header__top");
    const scrollPosition = window.scrollY;
    if (scrollPosition > heigth && count === 0) {
      menu.style.backgroundColor = "#082128";
      count = 1;
    }
    if (scrollPosition < heigth && count === 1) {
      menu.style.backgroundColor = "";
      count = 0;
    }
  });

  var mixer = mixitup(".gallery__top-content");
});
