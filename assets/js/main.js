// btn header

$(document).ready(function() {
  $("#mobile-btn").click(function () {
    $("#modal").css({
      "background": "rgba(0,0,0,0.5)",
      'visibility' : 'visible' 
    });
    $('.mobile-nav').css({
      'left': 'calc(100% - 400px)'
    });
  });

  $(".header-buttons__cart").click(function () {
    $("#modal").css({
      "background": "rgba(0,0,0,0.5)",
      'visibility' : 'visible' 
    });
    $('.cart-bar').css({
      'left': 'calc(100% - 400px)'
    });
  });

  $('#modal').click(function() {
    $(this).css({
      "background": "rgba(0,0,0,0)",
      'visibility' : 'hidden' 
    });

    $('.mobile-nav').css({
      'left': '100%'
    });

    $('.cart-bar').css({
      'left': '100%'
    });
  });

  $('.close').click(function() {
    $('#modal').css({
      "background": "rgba(0,0,0,0)",
      'visibility' : 'hidden' 
    });

    $('.mobile-nav').css({
      'left': '100%'
    });

    $('.cart-bar').css({
      'left': '100%'
    });
  });
});

// end -------------------

// slider banner 
$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true
});