// Slider Initialization
$(document).ready(function(){
    $(".primary-slider").owlCarousel({
      dots: false,
      margin: 60,
      responsive:{
        0:{
            items:1.5,
            margin: 16,
        },
        599: {
          items: 3,
          margin: 32,
        },
        1300:{
            items: 3,
        }
      }
    });
});