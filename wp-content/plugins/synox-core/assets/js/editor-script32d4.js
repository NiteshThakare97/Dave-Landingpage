(function ($) {
    "use strict";

    function headerOffcanvas($scope, $) {
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
    }
    function client_carousel($scope, $) {
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
    }

    function testimonial($scope, $) {
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
    }
    function marquee($scope, $) {
        $('.marquee-left').marquee({
            speed: 50,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: false,
            startVisible: true,
        });
    }
    function testimonialmeq($scope, $) {
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
    }
    function funfact($scope, $) {
        jQuery('.odometer').appear(function (e) {
            var odo = jQuery(".odometer");
            odo.each(function () {
                var countNumber = jQuery(this).attr("data-count");
                jQuery(this).html(countNumber);
            });
        });
    }
    function testimonialV3($scope, $) {
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
    }

    $(window).on('elementor/frontend/init', function () {
        if (elementorFrontend.isEditMode()) {
            elementorFrontend.hooks.addAction('frontend/element_ready/synox-header-6.default', headerOffcanvas);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-client-carousel.default', client_carousel);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-testimonial.default', testimonial);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-client-carousel.default', marquee);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-hero-banking.default', marquee);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-testimonialmeq.default', testimonialmeq);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-funfact-2.default', funfact);
            elementorFrontend.hooks.addAction('frontend/element_ready/syn-testimonial3.default', testimonialV3);
        }
    });

})(jQuery);