$(document).ready(function () {
  $(".jsSlide").slick({
    dots: true,
    prevArrow: $(".jsSlidePrev"),
    nextArrow: $(".jsSlideNext"),
  });

  var qtdSlides = $("[id^=slick-slide0]").length;
  var slideAtual = 1;

  $(".jsSlide").on("afterChange", function (event, slick, direction) {
    $(".jsSlideSteps").text(direction + 1 + "/" + qtdSlides);
  });

  $(".jsSlideSteps").text(slideAtual + "/" + qtdSlides);

  $(".jsSlidePrev").on("click", function () {
    $(this).addClass("active");
    $(".jsSlideNext").removeClass("active");
  });

  $(".jsSlideNext").on("click", function () {
    $(this).addClass("active");
    $(".jsSlidePrev").removeClass("active");
  });
});

AOS.init();
