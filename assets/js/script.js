$(document).ready(function ($) {
    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 5) {
            $('.header').addClass('is-sticky');
            $('.announcement-wrapper').addClass('up');
        } else {
            $('.header').removeClass('is-sticky');
            $('.announcement-wrapper').removeClass('up');
        }
    });

    if ($('#main-content').length) {
        $(window).resize(function () {
            $('#main-content').css("padding-top", $(".header-transparent .announcement-wrapper").height());
        }).resize();
    }

    // Search box
    $(".btn-search").click(function () {
        $(".search-bar").toggleClass("active");
    });
    $(".btn-close-search").click(function () {
        $(".search-bar").removeClass("active");
    });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
    $(".navbar").menumaker({
        title: "Menu",
        format: "multitoggle"
    });

    // announcement Slider
    if ($('.announcement-wrapper').length) {
        var announcement_bar = new Swiper(".announcement-bar", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 500,
            autoplay: {
                delay: 1500,
            },
        });
    }

    // banner slider
    if ($('.banner-wrapper').length) {
        var bannerslide = new Swiper(".banner-slide", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            speed: 1500,
            // autoplay: {
            //     delay: 1500,
            // },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        function adjustBannerHeight() {
            var headerHeight = $('header').outerHeight(); // Get the height of the header
            var windowHeight = $('.banner-wrapper').height(); // Get the height of the window
            var bannerHeight = windowHeight - headerHeight; // Calculate banner height

            // Set the height of the banner-slider
            $('.banner-slider .detail').css('height', bannerHeight + 'px');
        }

        // Adjust the height on page load
        adjustBannerHeight();

        // Adjust the height on window resize
        $('.banner-wrapper').resize(function () {
            adjustBannerHeight();
        });

        function adjustPagination() {
            $('.swiper-slide-active').each(function () {
                var containerHeight = $(this).find('.container-fluid').outerHeight(); // Use outerHeight() for accurate measurements
                var swiperHeight = $('.banner-wrapper').height(); // Use outerHeight() for accurate measurements

                // Calculate bottom position for pagination, considering padding and margins
                var paginationBottom = swiperHeight / containerHeight * 40 - 30; // Adjust padding and margins as needed

                // Set the bottom position for pagination in this slide
                $('.banner-slide').closest('.swiper').find('.swiper-pagination').css('bottom', paginationBottom + 'px');
            });
        }

        // Call the function initially
        adjustPagination();

        // Adjust on window resize if the container height changes
        $('.banner-wrapper').resize(function () {
            adjustPagination();
        });
    }

    // adventure card expand
    if ($('.adventure-wrapper').length) {
        $('.takeover-card .details').each(function (index) {
            var $thisCard = $(this);
            var cardImage = $('.card' + (index + 1));
            $thisCard.hover(
                function () {
                    $thisCard.addClass('z-30');
                    $thisCard.removeClass('z-10');
                    cardImage.addClass('highlighted');
                    cardImage.addClass('z-20');
                    cardImage.removeClass('z-10');
                },
                function () {
                    $thisCard.removeClass('z-30');
                    cardImage.removeClass('highlighted');
                    cardImage.removeClass('z-20');
                }
            );
        });
    }

    // card-grid-slider 
    if ($('.card-grid-wrapper').length) {
        var traveler_slider = new Swiper(".card_grid-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            centeredSlides: true,
            centeredSlidesBounds: true,
            // effect: "fade",
            speed: 2500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: '1.25',
                },
                640: {
                    slidesPerView: '2.25',
                },
                768: {
                    slidesPerView: '3.25',
                },
                1024: {
                    slidesPerView: '4',
                },
                1200: {
                    slidesPerView: '5',
                },
                1600: {
                    slidesPerView: '5',
                }
            },
        });
    }

    gsap.utils.toArray(".grid-details").forEach(card => {

        // Select elements relative to each card
        let q = gsap.utils.selector(card);

        // Set initial opacity, y position, and visibility of content (hidden initially)
        gsap.set(q('.content'), { autoAlpha: 0, y: 20 });

        // Hover effect: content slides up and fades in, title has a subtle effect
        card.addEventListener("mouseover", () => {
            // Content animation (slide-up and fade-in)
            gsap.to(q('.content'), {
                duration: 0.4,
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
                display: 'block'
            });

            // Title animation (could be color change, slight move, etc.)
            gsap.to(q('.grid-details'), {
                duration: 0.4,
                autoAlpha: 1,
                y: 0,  // Slight move upward
                color: "#ff6347",  // Change color on hover
                ease: "power2.out"
            });
        });

        // Hide content on mouse leave, title transitions back
        card.addEventListener("mouseleave", () => {
            // Content animation (slide-down and fade-out)
            gsap.to(q('.content'), {
                duration: 0.4,
                autoAlpha: 0,
                y: 20,
                ease: "power2.in",
                onComplete: () => gsap.set(q('.content'), { display: 'none' })
            });

            // Title transitions back to original state
            gsap.to(q('.grid-details'), {
                duration: 0.4,
                autoAlpha: 1,
                y: 20,  // Move back to original position
                color: "#000",  // Return to original color
                ease: "power2.in"
            });
        });
    });


    // map
    if ($('.location-wrapper').length) {
        $('.small-station').each(function () {
            $(this).hover(
                function () {
                    $(this).addClass('open'); // Add 'open' on hover
                },
                function () {
                    $(this).removeClass('open'); // Remove 'open' when hover ends
                }
            );
        });
    }

    // mobile screen dropdown footer menu
    if ($('footer').length) {
        $('.footer-menu .title').click(function (e) {
            e.preventDefault();
            $('.footer-menu .title').not(this).removeClass('active').next('.footer-dropdown').slideUp();
            $(this).toggleClass('active');
            $(this).next('.footer-dropdown').slideToggle();
        });
    }

    // advanture-slider 
    if ($('.adventure-wrapper').length) {
        var traveler_slider = new Swiper(".advanture-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            // effect: "fade",
            speed: 2500,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: '1.25',
                },
                640: {
                    slidesPerView: '1.25',
                },
                768: {
                    slidesPerView: '1.5',
                },
                1024: {
                    slidesPerView: '1.5',
                },
                1200: {
                    slidesPerView: '1.85',
                },
                1600: {
                    slidesPerView: '1.85',
                }
            },
        });
    }

    // brand partners slider
    if ($('.brand-wrapper').length) {
        var brand_slide = new Swiper('.brand-slide', {
            allowTouchMove: false,
            slidesPerView: '1',
            spaceBetween: 60,
            speed: 2000,
            loop: true,
            centeredSlides: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: '2.5',
                    spaceBetween: 40,
                },
                640: {
                    slidesPerView: '3.5',
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: '4.5',
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: '5',
                },
                1600: {
                    slidesPerView: '5',
                }
            },
        });
    }
    // review slider
    if ($('.review-wrapper').length) {
        var review_slider = new Swiper('.review-slider', {
            allowTouchMove: false,
            slidesPerView: '1',
            spaceBetween: 0,
            loop: false,
            centeredSlides: true,
            centeredSlidesBounds: true,
            speed: 2000,
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: true,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: '1.9',
                },
                440: {
                    slidesPerView: '2.5',
                },
                640: {
                    slidesPerView: '3.5',
                },
                768: {
                    slidesPerView: '3.5',
                },
                1024: {
                    slidesPerView: '4',
                },
                1200: {
                    slidesPerView: '5',
                },
                1600: {
                    slidesPerView: '5',
                }
            },
        });
    }

    //travelr-slider 
    if ($('.traveler-wrapper').length) {
        var traveler_slider = new Swiper(".traveler-slide", {
            allowTouchMove: false,
            slidesPerView: 1,
            spaceBetween: 28,
            loop: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            // effect: "fade",
            speed: 2500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: '1.3',
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                640: {
                    slidesPerView: '1.3',
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: '1.85',
                    centeredSlides: true,
                },
                1024: {
                    slidesPerView: '1.85',
                    centeredSlides: false,

                },
                1200: {
                    slidesPerView: '1.85',
                    centeredSlides: false,
                },
                1600: {
                    slidesPerView: '1.85',
                    centeredSlides: false,
                }
            },
        });
    }

    // about-slider
    if ($('.grid-box-wrapper').length) {
        var brand_slide = new Swiper('.about-slider', {
            allowTouchMove: false,
            slidesPerView: '1',
            spaceBetween: 0,
            speed: 2000,
            loop: false,
            centeredSlides: true,
            centeredSlidesBounds: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },

                1024: {
                    slidesPerView: 4,
                    // loop: true,
                },
                768: {
                    slidesPerView: 2.5,
                    // loop: true,
                },
                640: {
                    slidesPerView: 2.5,
                    // loop: true,
                },
                378: {
                    slidesPerView: 1.2,
                    // loop: true,
                },
                0: {
                    slidesPerView: 1.2,
                    // loop: true,

                },
            }
        });
    }


    // highlights slider
    if ($('.highlights-wrapper').length) {
        var review_slider = new Swiper('.highlights-slider', {
            allowTouchMove: false,
            slidesPerView: '1',
            spaceBetween: 28,
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            speed: 2000,
            loop: false,
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: true,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: '1.40',
                    spaceBetween: 28,
                },
                440: {
                    slidesPerView: '1.5',
                    spaceBetween: 28,
                    centeredSlides: true,
                },
                640: {
                    slidesPerView: '1.5',
                    spaceBetween: 28,
                },
                768: {
                    slidesPerView: '2.5',
                    spaceBetween: 28,
                },
                1024: {
                    slidesPerView: '4',
                    spaceBetween: 28,
                },
                1200: {
                    slidesPerView: '4',
                    spaceBetween: 28,
                },
                1600: {
                    slidesPerView: '4',
                    spaceBetween: 28,
                }
            },
        });
    }

    // bookig-tab
    $('.tabs-nav .nav-item:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();
    
    $('.tabs-nav .nav-item').click(function () {
        // Check if the clicked nav-item already has the 'active' class
        if (!$(this).hasClass('active')) {
            // Remove 'active' class from all nav-items
            $('.tabs-nav .nav-item').removeClass('active');
    
            // Add 'active' class to the clicked nav-item
            $(this).addClass('active');
    
            // Hide all tab contents
            $('.tab-content').hide();
    
            // Get the href attribute of the clicked nav-item to target the related content
            var activeTab = $(this).find('a').attr('href');
            
            // Show the related tab content
            $(activeTab).show();
        }
        return false; // Prevent default anchor behavior
    });

});

$(document).ready(function ($) {
    function isMobile() {
        return window.innerWidth >= 1024; // You can adjust this breakpoint if needed
    }

    $(".btn-search").click(function () {
        if (isMobile()) {
            $(this).addClass('hidden');
            $(this).removeClass('block');
        }
    });

    $(".btn-close-search").click(function () {
        if (isMobile()) {
            $(".btn-search").addClass('block');
            $(".btn-search").removeClass('hidden');
        }
    });
});

$(document).ready(function ($) {
    gsap.registerPlugin(ScrollTrigger);

    $(".anim").each(function () {
        let section = $(this);
        gsap.fromTo(section.find(".anim-img"),
            {
                clipPath: 'inset(0 100% 0 0)'
            },
            {
                clipPath: 'inset(0 0% 0 0)',
                duration: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    scrub: false,
                    start: "top 50%",
                }
            });

        // Animate the content
        gsap.fromTo(section.find(".anim-up"),
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    scrub: false,
                    start: "top 50%",
                }
            });
    });
});

// Responsive menu start
(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".navbar-toggler").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('#menu-main-menu');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('#menu-main-menu').show();
                    }
                }
            });
            cssmenu.find('li ul.sub-menu').parent().addClass('has-sub');
            function multiTg() {
                cssmenu.find(".has-sub").prepend('<span role="button" class="xl:hidden submenu-button cursor-pointer"><svg class="block" width="20" height="11" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.0099 11.2904L0.410482 2.69068C-0.136828 2.14364 -0.136828 1.2567 0.410482 0.709921C0.957304 0.163098 1.8442 0.163098 2.39098 0.709921L10.0001 8.31931L17.609 0.710143C18.1561 0.16332 19.0429 0.16332 19.5897 0.710143C20.1368 1.25696 20.1368 2.14386 19.5897 2.6909L10.9902 11.2906C10.7166 11.564 10.3585 11.7005 10.0002 11.7005C9.6417 11.7005 9.28331 11.5637 9.0099 11.2904Z" fill="white"/></svg></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    if ($(this).hasClass('submenu-opened')) {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');

                    } else {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');
                        $(this).addClass('submenu-opened');
                    }

                    if ($(this).siblings('ul').hasClass('open')) {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        cssmenu.find('.submenu-button').siblings('a').removeClass('active');
                    } else {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        cssmenu.find('.submenu-button').siblings('a').removeClass('active');
                        $(this).siblings('ul').addClass('open');
                        $(this).siblings('a').addClass('active');
                    }

                });
                cssmenu.find('a').on('click', function () {
                    if ($(this).attr('href') == '#') {

                        $(this).siblings('span').toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open');
                        } else {
                            $(this).siblings('ul').addClass('open');
                        }
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            function resizeFix() {
                var mediasize = 1199;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').addClass('open');
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };

})($);
// Responsive menu end