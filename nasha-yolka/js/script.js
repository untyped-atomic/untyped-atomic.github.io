$(document).ready(function(){
$('.showroom-carousel').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     centerMode: true,
     dots:false,
     arrows:true,
     prevArrow: '.arrow-prev',
     nextArrow: '.arrow-next',
     responsive: [
        {
          breakpoint: 1201,
        settings: {
         centerMode: false
        }
       },
       {
          breakpoint: 769,
        settings: {
         slidesToShow: 1
        }
       }
      ]
   });
   $('.input-phone').inputmask({"mask":"+38 ( 999 ) 999-99-99",clearMaskOnLostFocus:false});
   $('.callorder-btn,.map-callorder-btn').click(function(e){
     e.preventDefault();
     $('.container').addClass('blur-popup');
     $('.overlay, #callorder-modal').show();
   });
   $('.buy-btn').click(function(e){
    e.preventDefault();
    $('.container').addClass('blur-popup');
     $('.overlay, #buyitem-modal').show();
     var title = $(this).siblings('.catalog-item__title').text();
     $('#title').val(title);
   });
   $('.cls-icon').click(function(){
     $(this).closest('.modal').hide();
     $('.overlay').hide();
     $('.container').removeClass('blur-popup');
   });
   $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('a[class="active"]').removeClass('active');
        anchor.addClass('active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1000);
        e.preventDefault();
        return false;
    });

var popupSlider = $('.popup-slider');
var arr = [
['catalog-pics/driada/1.jpg','catalog-pics/driada/2.jpg','catalog-pics/driada/3.jpg'],
['catalog-pics/premium/1.jpg','catalog-pics/premium/2.jpg','catalog-pics/premium/3.jpg'],
['catalog-pics/fantastic/1.jpg','catalog-pics/fantastic/2.jpg','catalog-pics/fantastic/3.jpg'],
['catalog-pics/polar/1.jpg','catalog-pics/polar/2.jpg','catalog-pics/polar/3.jpg'],
['catalog-pics/krasavitsa/1.jpg','catalog-pics/krasavitsa/2.jpg','catalog-pics/krasavitsa/3.jpg'],
['catalog-pics/venera/1.jpg','catalog-pics/venera/2.jpg','catalog-pics/venera/3.jpg'],
['catalog-pics/krona-mix/1.jpg','catalog-pics/krona-mix/2.jpg','catalog-pics/krona-mix/3.jpg'],
['catalog-pics/krona-light/1.jpg','catalog-pics/krona-light/2.jpg','catalog-pics/krona-light/3.jpg'],
['catalog-pics/pikhta/1.jpg','catalog-pics/pikhta/2.jpg','catalog-pics/pikhta/3.jpg'],
['catalog-pics/standart/1.jpg','catalog-pics/standart/2.jpg','catalog-pics/standart/3.jpg'],
['catalog-pics/lux/1.jpg','catalog-pics/lux/2.jpg','catalog-pics/lux/3.jpg'],
['showroom-pics/1.png','showroom-pics/2.png','showroom-pics/3.png']
];
$('.has-pics > div:first-child').on('click', function() {
var cNum = +($(this).parent().attr("id")) - 1;
if($(this).parent().hasClass('showroom-item')) {cNum = 11};
console.log(cNum);
var cArray = arr[cNum];
console.log(cArray);
for (var key of cArray) {
  popupSlider.append(`<div><div class="popup-slider__item"><img src="${key}" alt="" /></div></div>`);
};
popupSlider.slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: true,
dots: false
});
$('.container').addClass('blur-popup');
$('.overlay, .popup').show();
});

$('.popup .cls-icon').click(function() {
  $(this).closest('.popup').hide();
  $('.overlay').hide();
  $('.container').removeClass('blur-popup');
  popupSlider.slick('unslick');
  popupSlider.html('');
});

function hideAll() {
     $('#error-message,.overlay').hide();
     $('.container').removeClass('blur-popup');
}

$(function(){
$('#callorder-modal').submit(function(e){
  var modal = $(this).closest('.modal');	
  e.preventDefault();
  if($(this).find('.input-phone').val() !='') {
  $.ajax({
    url: '/mail.php',
    method: 'POST',
    data: $(this).serialize(),
    success: function(data) {
    modal.hide(); 
    $('#success-message').show();
    setTimeout(hideAll, 3000);
    },
    error: function(err) {
    modal.hide(); 	
    $('#error-message').show();
    setTimeout(hideAll, 3000);
    }
   });
   }
  })
 });
$(function(){
$('#buyitem-modal').submit(function(e){
  var modal = $(this).closest('.modal');
  e.preventDefault();
  $.ajax({
    url: '/mail2.php',
    method: 'POST',
    data: $(this).serialize(),
    success: function(data) {
    modal.hide(); 
    $('#success-message').show();
    setTimeout(hideAll, 3000);
    },
    error: function(err) {
    modal.hide(); 
     $('#error-message').show(); 
     setTimeout(hideAll, 3000);
    }
   });
  })
 });

});