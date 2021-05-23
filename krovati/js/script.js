$(document).ready(function(){
 "use strict";

// Sliders initiation
 $('.product-slider-thumbs').slick({
 slidesToShow: 5,
 slidesToScroll: 1, 
 arrows: true,
 draggable: false,
 asNavFor: '.product-slider',
 focusOnSelect: true
 });
 $('.product-slider').slick({
  dots:false,
  arrows:false
 });

 $('.related-product-slider').slick({
  dots:false,
  arrows:true
 });

$('.clients-slider').on('init', function(event, slick) {
$('.clients .slick-next').addClass('active');
}); 
$('.clients-slider').slick({
 slidesToShow: 3,
 slidesToScroll: 3,  
 dots:true,
 arrows:true,
 prevArrow: '.clients .slick-prev',
 nextArrow: '.clients .slick-next',
 infinite: false,
customPaging: function (slider, i) {
   $('#paging-total').text(i + 1);
 },
 responsive: [
    {
      breakpoint: 1181,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    }
 ]
});


// Clients slider custom navigation
let arrNext = $('.clients .slick-next');
let arrPrev = $('.clients .slick-prev');
let visibleSlidesNum = 0;
$(window).on('load resize', function() { 
  if( $(window).width() > 1180)  {
  visibleSlidesNum = 3;
  }
  else {
  visibleSlidesNum = 2;
  }
});


$('.clients-slider').on('afterChange', function(event, slick, nextPage){
  $('#paging-current').text(+nextPage / visibleSlidesNum + 1);
  let currentPage = +($('#paging-current').text());
  let lastPage = +($('#paging-total').text()); 
  let deltaSlidesNum = lastPage - 1;
 if (currentPage === lastPage) {
    arrNext.removeClass('active');
    arrPrev.addClass('active');
  }
  if (currentPage + deltaSlidesNum === lastPage) {
    arrPrev.removeClass('active');
    arrNext.addClass('active');   
}
});

// Closing modals
$('.modal-cls,.modal-added .btn').click(function(){
 $.fancybox.close();
});

// Anchor links
 $('a[href^="#"]').on("click", function(e){

    let anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 2000);       
      e.preventDefault();
           
      return false;     
  }); 

// Long description show/hide
$('.show-more').click(function(){
  $(this).hide();
  $(this).siblings().children('.hidden').show();
});
$('.hidden').click(function(){
  $(this).hide();
  $('.show-more').show();
});



// Modal checkout manipulations
$('.delete-btn').click(function(){
 let subtractedSum = $(this).siblings().children('.item-sum').html();

 subtractedSum = Number(subtractedSum);
 
 let totalOrderPrice = Number($('#total-price').html());

 let deltaValue = totalOrderPrice - subtractedSum;

  $('#total-price').html(deltaValue);
  $(this).closest('.modal-checkout-item').remove();
});
$('.subtract').click(function(){
let qNumElement = $(this).siblings('.quantity-num');
let qNum  = Number($(this).siblings('.quantity-num').html());
let finalSum = Number(( $(this).closest('.modal-checkout-item__sum') ).html());
if(qNum > 1) {
  qNum -= 1;
  finalSum += finalSum;
  qNumElement.text(qNum);
}
});
$('.add').click(function(){
let qNumElement = $(this).siblings('.quantity-num');  
let qNum  = Number($(this).siblings('.quantity-num').html());
  qNum += 1;
  qNumElement.text(qNum);
});


// Custom selectbox for colorpicker
let x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("color-selectbox");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");

  selElmnt.options[1].innerHTML = '<span class="blue"></span>';
  selElmnt.options[2].innerHTML = '<span class="pink"></span>';
  selElmnt.options[3].innerHTML = '<span class="green"></span>';
  selElmnt.options[4].innerHTML = '<span class="nude"></span>';
  a.innerHTML = selElmnt.options[1].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener("click", function(e) {
        let y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// Set first color option as checked
$(".select-color").val($(".select-color option:first").val());


//Show hidden products on mobile
$('.mbl-expand-btn').click(function(){
 $(this).siblings().find('.xs-hidden').show();
 $(this).hide();
}); 

//Add input mask
$('.input-phone').inputmask({
  "mask":"+370 999 999 99",clearMaskOnLostFocus:false});

// Map
jQuery(document).ready(function ($) {
  google.maps.event.addDomListener(window, 'load', init);
  var mapStyle =  [
{
featureType: 'landscape',
elementType: 'geometry',
stylers: [
{hue: '#cccccc'},
{saturation: -100},
{lightness: -10},
{visibility: 'on'}
]
}
];
  function init() {
    var contactsMap = {
        zoom: 17,
        center: new google.maps.LatLng(54.686192, 25.285962),
        styles: mapStyle
    };
    
    var footerMap = document.getElementById('footer-map');

    var map = new google.maps.Map(footerMap,contactsMap);

    var image = 'images/img/pin.png';

    var marker = new google.maps.Marker({
    position: {lat: 54.686192, lng: 25.285962},
    map: map,
    icon: image
    });
     
  }
});

// Update little cart data
let littleCartNum = $('#little-cart-num').html();
littleCartNum = Number(littleCartNum);
$('#product-tocart-btn, .tocart-btn').click(function(){
 littleCartNum += 1;
 $('#little-cart-num').html(littleCartNum);
});



//Toggle sliders for tablets
let toggledSliderMattresses = $('.mattresses-mbl');
let toggledSliderMattresses_settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '.mattresses .slick-prev',
  nextArrow: '.mattresses .slick-next'
};

let toggledSliderAccessories = $('.accessories-mbl');
let toggledSliderAccessories_settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '.accessories .slick-prev',
  nextArrow: '.accessories .slick-next'
};

function toggleSlick(slider, settings) {
$(window).on('load resize', function() {
  if( $(window).width() > 1140 || $(window).width() < 681 )  {
    if ( slider.hasClass('slick-initialized') ) {
      slider.slick('unslick');
    }
    return
  }
  if( !slider.hasClass('slick-initialized') ) {
    return slider.slick(settings);
  }
});
};

toggleSlick(toggledSliderMattresses, toggledSliderMattresses_settings);
toggleSlick(toggledSliderAccessories, toggledSliderAccessories_settings);



let colorSlider = $('.product-color-picker');
let colorSliderSettings  = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false
};

function makeColorsSlide(slider, settings) {
$(window).on('load resize', function() {
  if( $(window).width() > 381)  {
    if ( slider.hasClass('slick-initialized') ) {
      slider.slick('unslick');
    }
    return
  }
  if( !slider.hasClass('slick-initialized') ) {
    return slider.slick(settings);
  }
});
};

makeColorsSlide(colorSlider,colorSliderSettings);

});