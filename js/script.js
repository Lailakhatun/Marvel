$(function(){
    'use strict'
   

    // type js
    var typed = new Typed('.test', {
        strings: [
         '  professional web designer',
          
        ],
        typeSpeed: 30,
        backSpeed: 30,
        startDelay: 800,
        backDelay: 700,
        loop: true,
        
    });

    // slick slider
    
$('.slider_image').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
    autoplay:false,
    nextArrow:'<i class="fas fa-arrow-right nextarr"></i>',
    prevArrow:'<i class="fas fa-arrow-left prearr"></i>',
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  }); 
//   back to top button
$('.back-to-top').on('click',function(){
    $('html,body').animate({
      scrollTop:0,
    },1000);
  });
  $(window).scroll(function () {
    var scrolling2 =  $(this).scrollTop();

    if(scrolling2 > 200){
      $('.back-to-top').fadeIn();

    }else{
      $('.back-to-top').fadeOut()
    }
  });

// sticky menu
var navOff = $('.main_menu').offset().top;
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if (scrolling > navOff) {
        $('.main_menu').addClass('menu-fix');
      }else{
        $('.main_menu').removeClass('menu-fix');
      }
    });
});

// dark and light mode
document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
  document.body.classList.toggle('dark');

});

