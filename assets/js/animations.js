var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$("section").each(function(i) {
  
  // Getting Elements
  var promo = $(this).find(".promotion-details");
  var img = $(this).find(".img-border-wrapper img");
  var hr = $(this).find("hr");

  var sectionTitle = $(this).find(".section-title path");
  var sectionSubTitle = $(this).find(".section-sub-title");  

  var borderTop = $(this).find(".b-t");
  var borderBottom = $(this).find(".b-b");
  var borderLeft = $(this).find(".b-l");
  var borderRight = $(this).find(".b-r");

  var slider = $(this).find(".primary-slider");
  var sliderItem = $(this).find(".slider-item");


  // Animation Effects and Logic
  var tl = new TimelineMax();

  // Section Title
  $(sectionTitle).each(function(index) {
    tl.from(sectionTitle[index], 0.3, { 
        yPercent: -110,
        ease: "back"
    }, '-=0.100');
  });
  
  // Border 
  tl.from(borderTop, 0.65, { xPercent: 100}, '-=0.700');
  tl.from(borderBottom, 0.65, { xPercent: -100},'-=0.65');
  tl.from(borderLeft, 0.65, { yPercent: 100});
  tl.from(borderRight, 0.65, { yPercent: -100},'-=0.65');

  //  HR and Section Subtitle   
  tl.from(hr, 1, { xPercent: -120}, '-=1');
  tl.from(sectionSubTitle, 0.65, { opacity: 0, y: 50}, '-=1');

  //  Slider Items   
  $(sliderItem).each(function(index) {
    tl.from(sliderItem[index], 0.3, { 
        rotationY: 180,
        opacity: 0,
        ease: "back"
    }, '-=0.001');
  });

  // Promotion Section
  tl.from(promo, 0.65, { y: 50 }, '-=0.65');

  // Bordered Image
  tl.from(img, 0.65, { scale: 0.9});


  // Scroll Trigger 
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.80,
  })
    .setTween(tl)
    .addTo(ctrl);
});