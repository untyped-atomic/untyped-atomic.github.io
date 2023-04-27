$(document).ready(function(){


$(window).scroll(function(){
  let header = $('.header'),
  header_height = $('.header').outerHeight(),
  scroll = $(window).scrollTop();

  if (scroll >= header_height) header.addClass('header-fixed');
  else header.removeClass('header-fixed');
});

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let header_height = $('.header').outerHeight();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - header_height}, 500, 'linear');
    if($(window).innerWidth() < 1025) {
      $('.header-top,.overlay').fadeOut();
    }
}); 

$('.modal-btn').click(function(){
$('#orderModal, .overlay').fadeIn();
});

$('.modal-cls').click(function(){
  $('.modal,.overlay').fadeOut();
});

$('input[name*="phone"]').inputmask({
  "mask":"+7 (999) 999-99-99"
});

$('.hm-btn').click(function(){
  $('.header-top,.overlay').fadeIn();
});

$('.header-top__cls').click(function(){
  $('.header-top,.overlay').fadeOut();
});

$(document).mouseup(function(e){
  if($(window).innerWidth() < 1025) {
   let menu = $('.header-top');
   if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.fadeOut();
      $('.overlay').fadeOut();
   }
  }
});

$('.price-group__title, .faq-group__title').click(function(){
  $(this).siblings().slideToggle();
});


$('.video-slider__item__cover').click(function(){
let video = $(this).data('youtube');
let yotube_iframe = "<iframe width='560' height='315' src='https://www.youtube.com/embed/" + video + "?autoplay=1&mute=1&enablejsapi=1' frameborder='0' allow='autoplay; encrypted-media;'></iframe>";
$(this).closest('.video-slider__item').append(yotube_iframe);
$(this).hide();
});


if($('.results-slider').length) {
 $('.results-slider').slick({   
  slidesToShow: 3,
  slidesToScroll: 1, 
  infinite: false,
  dots: false,
  arrows:true,
  prevArrow: $('.results-slider-wrap .slick-prev'),
  nextArrow: $('.results-slider-wrap .slick-next'),
  responsive: [
  {
    breakpoint: 768,
    settings: {
    slidesToShow: 2 
    }
  },
  {
    breakpoint: 481,
    settings: {
    slidesToShow: 1 
    }
  }
  ]
 });
}

if($('.video-slider').length) {
 $('.video-slider').slick({   
  slidesToShow: 3,
  slidesToScroll: 1, 
  infinite: true,
  draggable: false,
  dots: false,
  arrows:true,
  prevArrow: $('.video-slider-wrap .slick-prev'),
  nextArrow: $('.video-slider-wrap .slick-next'),
  responsive: [
  {
    breakpoint: 1025,
    settings: {
    slidesToShow: 1, 
    }
  }
  ]
 });
}


function downloadPDF() {
  let a = document.createElement("a");
  a.style = "display: none";
  a.href = "manual.pdf";
  a.download = "manual.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

$('.modal-form').submit(function(e) {
  e.preventDefault();
  $.ajax({
  url: 'feedback.php',
  method: 'POST',
  data: $(this).serialize(),
  success: function(data) {
  $('#orderModal').fadeOut();  
  $('#success-msg').fadeIn();
  $('.modal-form').find('.modal-form__input').each(function(){
  $(this).val(null);
  });
  },
  error: function(err) {
  $('#orderModal').fadeOut();  
  $('#error-msg').fadeIn();
  }
  });
  });

$('.promo-panel__form').submit(function(e) {
  e.preventDefault();
  $.ajax({
  url: 'feedback.php',
  method: 'POST',
  data: $(this).serialize(),
  success: function(data) { 
  $('#success-msg,.overlay').fadeIn();
  $('.promo-panel__form').find('.promo-panel__form__input').each(function(){
  $(this).val(null);
  });
  },
  error: function(err) { 
  $('#error-msg,.overlay').fadeIn();
  }
  });
  });

$('.apply-form').submit(function(e) {
  e.preventDefault();
  $.ajax({
  url: 'feedback.php',
  method: 'POST',
  data: $(this).serialize(),
  success: function(data) { 
  $('#success-msg,.overlay').fadeIn();
  downloadPDF();
  $('.apply-form').find('.apply-form__input').each(function(){
  $(this).val(null);
  });
  },
  error: function(err) { 
  $('#error-msg,.overlay').fadeIn();
  }
  });
  });

});