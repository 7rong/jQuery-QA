$(document).ready(function () {
    //下拉式選單
    $('.nav .menu .menu_product').click(function (e) { 
        e.preventDefault();
        $('.nav .product_list').slideToggle();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('ul').slideUp();
    });

    $('.nav .menu .menu_contact').click(function (e) { 
        e.preventDefault();
        $('.nav .contact_list').slideToggle();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).parent().siblings().find('ul').slideUp();
    });


    //lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'maxWidth':500,
      'maxHeigt':500,
      'positionFromTop':100,
    })

    //swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true, //重複播放
        autoplay:{
          delay:2000,
        },
        speed: 1000, 
        effect: 'fade',
        
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    //top
    $('a.goTop').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },700);
    });


  
});

