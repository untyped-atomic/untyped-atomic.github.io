$(document).ready(function(){
  
  $('.hm-btn').click(function() {    
    $('.header__nav').toggleClass('show-nav');
  });

  if ( $(window).width() < 1200 ) {    
  $('.has-dropdown').click(function(){
  $(this).toggleClass('active'); 
  $(this).find('.dropdown-menu').toggle();
  });

  $('.has-submenu').click(function(e){
   e.stopPropagation();
   $(this).toggleClass('active');
  $(this).find('.submenu').toggle();
  });
 }

$('input[name*="phone"]').inputmask({
  "mask":"+7 (999) 999-99-99",
  showMaskOnFocus: true 
}); 

});