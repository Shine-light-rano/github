(function ($) {
"use strict";


	/* Preloader */
	var win = $(window);
	win.on('load',function() {
		$('.page-loader').delay(350).fadeOut('slow');
	});	
	
	/* menu last class added */
	$('ul.basic-menu>li').slice(-2).addClass('menu-p-right');
	
	
	/* TOP Menu Stick  */
	win.on('scroll',function() {
	if ($(this).scrollTop() > 1){  
		$('#sticky-header').addClass("sticky");
	  }
	  else{
		$('#sticky-header').removeClass("sticky");
	  }
	}); 
	
	/* meanmenu */
	 $('#mobile-nav').meanmenu({
		 meanMenuContainer: '.basic-mobile-menu',
		 meanScreenWidth: "767"
	 });
	 
	/* hamburgers menu option  */
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-menu-show')
    }); 
	
	
	/*-- One Page Menu --*/
    var TopOffsetId = $('#sticky-header').height() - 25;
    $('.menu-area nav').onePageNav({
        currentClass: 'active',
        scrollThreshold: 0.2,
		changeHash: false,
        scrollSpeed: 1000,
        scrollOffset: TopOffsetId,
    });	
	
	/* testimonial active  */
    $('.testimonial-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
	
	/* portfolio-slider */
	$('.we_are_gallary').owlCarousel({
		loop:true,
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		nav:true,
		dots: false,
		autoplay:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
    
	/* portfolio-slider */
	$('.client_active').owlCarousel({
		loop:true,
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		nav:true,
		dots: false,
		autoplay:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	})		
	
    /* blog active  */
    $('.blog-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
	
	/* imagesLoaded active */
	$('#portfolio-grid,.blog-masonry').imagesLoaded( function() {
		
		/* Filter menu */
		$('.filter-menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});	

		/* filter menu active class  */
		$('.filter-menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

		/* Filter active */
		var $grid = $('#portfolio-grid').isotope({
		  itemSelector: '.portfolio-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: '.portfolio-item',
		  }
		});
		
		/* Filter active */
		$('.blog-masonry').isotope({
		  itemSelector: '.blog-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: '.blog-item',
		  }
		});			
		
	});

	/* magnificPopup img view */
	$('.popup-link').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	
	/* counterUp */
	$('.counter-number').counterUp();

	/* main-slider */
	$('.slider-active').owlCarousel({
		loop:true,
		navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
		nav:false,
		dots:true,
		animateOut: 'fadeOut',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	
	
     $('.count').counterUp({
        delay: 10,
        time: 5000
    }); 
	
	
   /*  youtube video */
    $('.youtube-bg').YTPlayer({
        videoURL: "r4dD-WYzrMs",
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
		showControls: false,
		mute:true
    });
	
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 1000, // Animation in speed (ms)
		animationOutSpeed: 1000, // Animation out speed (ms)
		scrollText: '<i class="lnr lnr-chevron-up"> </i>', // Text for element 
	});	
	



})(jQuery);	