$('.post-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows:true, 
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