$('.main-bg').slick({
  dots: true,
  dotsClass: 'bn-controller',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: true,
  arrows:true,
  prevArrow : "<button type='button' class='prev'><i></i></button>",
	nextArrow : "<button type='button' class='next'><i></i></button>",	

  customPaging: function (slide, i) {
    // console.log( slide.$slider[0] )
    //아래 마크업처럼 적용할 버튼들의 마크업을 대입하면 된다.

    // slick내부에서 슬라이드 개수 만큼 for문으로 생성 ( 슬라이드 개수 만큼 복제된다. )

    return '<div class="slide-banner">' +
      ' <div class="bn-item"> 0' + (i + 1) + '</div>' +
      '</div>'
  }
});

$('.bg-wrap').slick({
  dots: true,
  initialSlide: 5,
  dotsClass: 'pg-controller',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  draggable: true,
  fade: true,

  
  customPaging: function (slide, i) {
    let brands = ['gola', 'comoninoz', 'w.standard', 'deliccent', 'outodoor products', 'ocean pacific', 'ordinary holiday', 'field worker'];

    return  '<span class="pg">'+ brands[i] +'</span>';
  }
});