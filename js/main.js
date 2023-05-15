$(function(){
  $('.design__slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow__left" src="images/Arrow-left.svg" alt="">',
    nextArrow: '<img class="arrow arrow__right" src="images/Arrow-right.svg" alt="">',
    responsive: [
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        }
      }
    ]
  })
});