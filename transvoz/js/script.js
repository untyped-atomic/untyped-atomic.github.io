$(document).ready(function(){

function setPagePadding(){
  let headerHeight=$('.header').innerHeight();
  $('.page-wrap').css('padding-top',headerHeight);
}
setPagePadding();

$(window).on('resize',function(){
  setPagePadding();
});

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let header_height = $('.header').outerHeight();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - header_height}, 500, 'linear');
    if($(window).innerWidth() < 1200) {
      $('.header-bottom-mbl').fadeOut();
    }
}); 

$('.hm-btn').click(function(){
  $('.header-bottom-mbl').slideDown('slow');
});

$('.cls-btn').click(function(){
  $('.header-bottom-mbl').slideUp('slow');
});

$('.review-details-btn').click(function(){
let card = $(this).closest('.review-card');
card.find('.review-card-inner,.review-card-back').css('transform','rotateY(180deg)');
});

$('.read-review-btn').click(function(){
let card = $(this).closest('.review-card');  
card.find('.review-card-inner').css('transform','rotateY(0)');
});

$(window).scroll(function(){
  let header_btm = $('.header-bottom-callback'),
  header_height = $('.header-top').outerHeight(),
  scroll = $(window).scrollTop();
  if (scroll >= header_height) {
    header_btm.addClass('hidden');
  }
  else {
    header_btm.removeClass('hidden');
  }
});

});