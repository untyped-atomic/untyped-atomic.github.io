$(document).ready(function(){

  $('#city_select').change(function(){
    $("#width_tmp_option").html($('#city_select option:selected').text());
    $(this).width($("#width_tmp_select").width());  
 });

   $('.top-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     dots:true,
     arrows:true,
     prevArrow: '.top-slider-nav .arrow-prev',
     nextArrow: '.top-slider-nav .arrow-next'
   });
   $('.offers-slider').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     dots:true,
     arrows:true,
     prevArrow: '.offers-slider-nav .arrow-prev',
     nextArrow: '.offers-slider-nav .arrow-next',
     responsive: [
        {
        breakpoint: 992,
         settings: {
          slidesToShow: 1
         }
        }
      ]
   });
   $('.reviews-slider').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     dots:true,
     arrows:true,
     prevArrow: '.reviews-slider-nav .arrow-prev',
     nextArrow: '.reviews-slider-nav .arrow-next',
     responsive: [
        {
        breakpoint: 992,
         settings: {
          slidesToShow: 1
         }
        }
      ]
   });

   $('.product-slider-thumbs').slick({
 slidesToShow: 4,
 slidesToScroll: 1, 
 arrows: false,
 draggable: false,
 vertical: true,
 asNavFor: '.product-slider',
 focusOnSelect: true
 });

 $('.product-slider').slick({
  dots:false,
  arrows:true,
  prevArrow: '.product-slider-nav .arrow-prev',
  nextArrow: '.product-slider-nav .arrow-next',
 });

 let tabs = $('.productpage-tabs-group');
  $('.productpage__tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
  });
  tabs.on('click', '.productpage__tabs a', function(e){
    e.preventDefault();
    let tabId = $(this).attr('href');
    $('.productpage__tabs a',tabs).removeClass('active');
    $(this).addClass('active');
    $('.productpage__tabs-content > div', tabs).hide(0);
    $(tabId).show();
});

$(window).on('load resize', function() {
    if ( $(window).width() < 1200 ) {    
    $('.header-nav').addClass('mbl-menu');       
    } else {     
    $('.header-nav').removeClass('mbl-menu');
    };
});
$('#hm-btn').click(function() {    
    $('.mbl-menu').fadeToggle('slow');
}); 

$('#search-btn').click(function() {
  $('.header-search').fadeToggle('slow');
})

 });