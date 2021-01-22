function Menu() {
  var left_padding = $(window).width() < 576 ? 300 : 400;
  // if ($(window).width() < 576) {
  //   left_padding = 300;
  // } else {
  //   left_padding = 400;
  // }


  console.log(left_padding);

  $("#mobile-btn").click(function () {
    $("#modal").css({
      background: "rgba(0,0,0,0.5)",
      visibility: "visible",
    });
    $(".mobile-nav").css({
      left: "calc(100% - " + left_padding + "px)",
    });
  });

  $(".header-buttons__cart").click(function () {
    $("#modal").css({
      background: "rgba(0,0,0,0.5)",
      visibility: "visible",
    });
    $(".cart-bar").css({
      left: "calc(100% - " + left_padding + "px)",
    });
  });

  $(".header-buttons__love").click(function () {
    $("#modal").css({
      background: "rgba(0,0,0,0.5)",
      visibility: "visible",
    });
    $(".wishlist").css({
      left: "calc(100% - " + left_padding + "px)",
    });
  });
}

$(window).resize(function () {
  Menu();
});

// btn header

$(document).ready(function () {
  Menu();

  $(".header-buttons__search").click(function () {
    $(".modal-search").animate({
      right: "0",
    });
  });

  $("#modal").click(function () {
    $(this).css({
      background: "rgba(0,0,0,0)",
      visibility: "hidden",
    });

    $(".mobile-nav").css({
      left: "100%",
    });

    $(".cart-bar").css({
      left: "100%",
    });

    $(".wishlist").css({
      left: "100%",
    });
  });

  $(".close").click(function () {
    $("#modal").css({
      background: "rgba(0,0,0,0)",
      visibility: "hidden",
    });

    $(".mobile-nav").css({
      left: "100%",
    });

    $(".cart-bar").css({
      left: "100%",
    });

    $(".wishlist").css({
      left: "100%",
    });

    $(".modal-search").animate({
      right: "100%",
    });
  });
});

// end -------------------

// slider banner
$(".banner-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  autoplay: true,
  prevArrow:
    '<button class="prev-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
});

// slider product

$(".arrival__product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button class="prev-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// slider best seller

$(".best-seller__product").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button class="prev-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// blog slider

$(".blog-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<button class="prev-btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow:
    '<button class="next-btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
