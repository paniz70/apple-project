$(document).ready(function () {
  AOS.init();

  $('.owl-custom-1').owlCarousel({
 
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  });
  $('.owl-custom-2').owlCarousel({
 
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  });
  $('.owl-custom').owlCarousel({
    items:4,
        loop:true,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
});

});
