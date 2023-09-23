$(document).ready(function () {
  $('.slider').slick({
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:true, 		// 옆으로 이동하는 화살표 표시 여부
    pauseOnHover: true,
    prevArrow: "<div class='arrow arrow-prev'><div class='arrow-top'></div><div class='arrow-bottom'></div></div>",		// 이전 화살표 모양 설정
    nextArrow: "<div class='arrow arrow-next'><div class='arrow-top'></div><div class='arrow-bottom'></div></div>",		// 다음 화살표 모양 설정
    dotsClass: "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable: true, 	//드래그 가능 여부 

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          // arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          // arrows: false,
        }
      }
    ]
  });
});