AOS.init();
//aos


$(function () {

  $("#slide-open").click(function () {
    if ($("#burgur").hasClass('on')) {
      $("#burgur").removeClass('on');
      $("#slide").removeClass('on');
      $("body").removeClass('on');


    } else {
      $("#burgur").addClass('on');
      $("#slide").addClass('on');
      $("body").addClass('on');
    }
  });

});
//menu


$(document).ready(function () {
  $(".tit").click(function () {
    var submenu = $(this).next("ul");
    if (submenu.is(":visible")) {
      submenu.slideUp();
      $(this).children().removeClass('toggle');
    } else {
      submenu.slideDown();
      $(this).children().addClass('toggle');
    }
  });
});

// accordion menu


let scrollText = document.getElementsByClassName('scroll-txt');

window.addEventListener("scroll", () => {
  console.log(window.scrollY);


  if (matchMedia("screen and (min-width: 600px)").matches) {
    //이상에서 사용할 스크립트

    if (window.scrollY > 1500) {
      scrollText[1].style.cssText = (`transform: translateX(${window.scrollY - 1500}px);`)
      // console.log(`transform: translateX(-${parseInt(window.scrollY)});`);

    }
    if (window.scrollY > 580) {
      scrollText[0].style.cssText = (`transform: translateX(-${window.scrollY - 580}px);`)
      console.log(`transform: translateX(-${parseInt(window.scrollY)});`);

    }

  } else {
    //미만에서 사용할 스크립트
    if (window.scrollY > 1300) {
      scrollText[1].style.cssText = (`transform: translateX(${window.scrollY - 1300}px);`)
      // console.log(`transform: translateX(-${parseInt(window.scrollY)});`);

    }
    if (window.scrollY > 600) {
      scrollText[0].style.cssText = (`transform: translateX(-${window.scrollY - 600}px);`)
      console.log(`transform: translateX(-${parseInt(window.scrollY)});`);

    }

  }
})