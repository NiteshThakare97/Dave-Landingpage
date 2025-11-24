// ==================================================
// * Project Name   :  Synox – Finance & Consulting Site Template.
// * File           :  JS Base
// * Version        :  1.0.0
// * Author         :  XpressBuddy (https://themeforest.net/user/xpressbuddy/portfolio)
// * Developer      :  webrok (https://www.fiverr.com/webrok?up_rollout=true)
// ==================================================

(function($) {
  "use strict";


  $(window).on('load', function () {
    preloader();
    wowAnimation();
  });

  //------------------------------------------
  // = preloader
  //-------------------------------------------
  function preloader() {
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  }

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(".scroll").on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false; 
  });
  // Back To Top - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  /*$(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  });*/
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
  $('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');
  $('.xb-menu-toggle').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
      $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
    }
    $(this).toggleClass('active');
    $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
    $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
  });

  $('.xb-nav-hidden li.menu-item-has-children > a').on('click', function () {
    var target = $(e.target);
    if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
      e.stopPropagation();
      if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
        $(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
        $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
      }
      $(this).find('.xb-menu-toggle').toggleClass('active');
      $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
      $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
    }
  });
  $(".xb-nav-mobile").on('click', function () {
    $(this).toggleClass('active');
    $('.xb-header-menu').toggleClass('active');
  });

  $(".xb-menu-close, .xb-header-menu-backdrop").on('click', function () {
    $(this).removeClass('active');
    $('.xb-header-menu').removeClass('active');
  });

  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
  }
  $(window).on('scroll', function () {
    if ($('.stricked-menu').length) {
      var headerScrollPos = 150;
      var stricky = $('.stricked-menu');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass('stricky-fixed');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed');
      }
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Header Menu Item Effect - Start
  // --------------------------------------------------
  $('.site_header .main_menu_list > li:not(.active)').mouseover(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '0.5',
      'transition': 'opacity 0.3s'
    });
    $(this).css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });

  $('.site_header .main_menu_list > li:not(.active)').mouseout(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });
  // Header Menu Item Effect - End
  // --------------------------------------------------

  // Offcanvas - Start
  // --------------------------------------------------
  $(".offcanvas_btn").on('click', function() {
    $(".offcanvas_wrapper").addClass("active");
    $(".offcanvas_overlay").addClass("active");
  });
  $(".offcanvas_close_btn").on('click', function() {
    $(".offcanvas_wrapper").removeClass("active");
    $(".offcanvas_overlay").removeClass("active");
  });
  $(".offcanvas_overlay").on('click', function() {
    $(".offcanvas_wrapper").removeClass("active");
    $(this).removeClass("active");
  });
  // Offcanvas - End
  // --------------------------------------------------

  // Odometer Counter - Start
  // --------------------------------------------------
  jQuery('.odometer').appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });
  // Odometer Counter - End
  // --------------------------------------------------

  // Pricing Toggle Button - Start
  // --------------------------------------------------
  $(".pricing_toggle_btn").on('click', function(){
    $(this).toggleClass("active");
    $(".pricing_block").toggleClass("active");
  });
  // Pricing Toggle Button - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.video_btn').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------
  function wowAnimation() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    wow.init();
  }
  // Wow JS - End
  // --------------------------------------------------

  /*------------------------------------------
   = nice slect
   -------------------------------------------*/
  $('.nice-select').niceSelect();

  // Background Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 0,
  });
  // Background Parallax - End
  // --------------------------------------------------
  
  // Filter Elements - Start
  // --------------------------------------------------
  $(".filter_elements_nav > ul > li").click(function(){
    var filterValue = $(this).attr('data-filter');
    if(filterValue == "all") {
      $(".filter_elements_wrapper > div").show();
    } else {
      $(".filter_elements_wrapper > div").not('.' + filterValue).hide();
      $(".filter_elements_wrapper > div").filter('.' + filterValue).show();
    }
  });
  $(".filter_elements_nav > ul > li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
  });
  // Filter Elements - End
  // --------------------------------------------------

  /*------------------------------------------
  = isotop
  -------------------------------------------*/
  $('.grid').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({filter: filterValue});
    });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  // Clients Logo Carousel - Start
  // --------------------------------------------------
  const clientsLogoCarousel = new Swiper('.clients_logo_carousel', {
    loop: true,
    speed: 5000,
    freeMode: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });
  // Clients Logo Carousel - End
  // --------------------------------------------------

  // Post gallery slider - Start
  // --------------------------------------------------
  var slider = new Swiper('.post-gallery-slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
      enabled: true,
      delay: 6000
    },
    navigation: {
      nextEl: ".post-gallery-button-next",
      prevEl: ".post-gallery-button-prev",
    },
    speed: 400,
  });
  // Post gallery slider - End
  // --------------------------------------------------

  // Review Carousel - Start
  // --------------------------------------------------
  const reviewCarousel = new Swiper('.review_carousel', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".review_pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  const reviewCarouselTwo = new Swiper('.review_carousel_2', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".rc2-swiper-button-next",
      prevEl: ".rc2-swiper-button-prev",
    },
  });

  const reviewMarqueeVerticalUp = new Swiper(".review_marquee_vertical_up", {
    loop: true,
    speed: 8000,
    freeMode: true,
    slidesPerView: 2,
    direction: "vertical",
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: true,
    },
  });

  const reviewMarqueeVerticalBottom = new Swiper(".review_marquee_vertical_bottom", {
    loop: true,
    speed: 8000,
    freeMode: true,
    slidesPerView: 2,
    direction: "vertical",
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });
  // Review Carousel - End
  // --------------------------------------------------

  /*------------------------------------------
	= marquee
	-------------------------------------------*/
  $('.marquee-left').marquee({
    speed: 50,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: false,
    startVisible: true,
  });


})(jQuery);