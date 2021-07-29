$(document).ready(function(){

$('.qna__set__question').click(function(){
  $(this).next().toggle();
  $(this).children('.qna-arr').toggleClass('qna-arr-rotated');
});

  $('.hm-btn').click(function() {    
    $('.header-bottom').toggleClass('header-bottom-mbl');
  });

  $('.text-unfold-btn-wrap').click(function(){
   $(this).hide();
   $('.text *:not(.text-unfold-btn-wrap)').show();
  });
  
  $(window).on('load resize', function() {
   if( $(window).width() < 1200)  {
      $('.pinned-ok').appendTo($('.jmb-mbl'));     
   	} else {
   	$('.pinned-ok').appendTo($('.get-price-top'));	
   	}
   });
});
