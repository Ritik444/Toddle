// Slider 1 
  $(document).ready(function(){
    $('.product-slider').slick({
        dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
      });
  });




// Slider 2 
$('.slider-2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// side bar
$(document).ready(function() {
  $('.menu-btn').click(function () {
      $('.side_bar').addClass('active');
    });
    
  $('.close-btn').click(function() {
      $('.side_bar').removeClass('active');
  });
});