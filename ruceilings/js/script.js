$(document).ready(function(){
 "use strict";

let header = $('.header-btm');
  let sticky = header.offset().top;
  $(window).scroll(function(){  
  if ($(window).scrollTop() > sticky) {
    header.addClass('sticky')
  } else {
    header.removeClass('sticky');
  }
});

if($('.top-slider').length) {
 $('.top-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     dots:true,
     arrows:false
   });
 }

$('.top-filter-form__option').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
});

$('.sidebar-filter-parameter__label').click(function(){
  $(this).toggleClass('open');
  $(this).siblings().slideToggle();
});

if($('#price-range-slider').length) {
    $("#price-range-slider").slider({
  range: true
});
}

let tabs = $('.tabs-group');
  $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
  });
  tabs.on('click', '.tabs a', function(e){
    e.preventDefault();
    let tabId = $(this).attr('href');
    $('.tabs a',tabs).removeClass('active');
    $(this).addClass('active');
    $('.tabs-content > div', tabs).hide(0);
    $(tabId).show();
});



let x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("top-filter-form__select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
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

$(window).on('load resize', function() {
    if ( $(window).width() < 1200 ) {    
    $('.header-top').addClass('mbl-menu');       
    } else {     
    $('.header-top').removeClass('mbl-menu');
    };
});
$('#hm-btn').click(function() {    
    $('.mbl-menu').fadeToggle('slow');
  }); 
});