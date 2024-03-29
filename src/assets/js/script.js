'use strict';
document.addEventListener('DOMContentLoaded', () => {
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
            $('.header-block__logo').addClass('header-block__logo-white'); 
        } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
            $('.header-block__logo').removeClass('header-block__logo-white');
        } 
    });

	try {
		new WOW().init();
	} catch (err) {}

    const cursor = document.getElementById('cursor');
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    const mouseCoords = (e) => {
        mouseX = e.pageX;
        mouseY= e.pageY;
    };

    gsap.to({}, 0.0015, {
        repeat: -1,
        
        onRepeat: () => {
            posX += (mouseX - posX)/5,
            posY += (mouseY - posY)/5,
            gsap.set(cursor, {
                css: {
                    left:posX - 5,
                    top:posY -5,
                }
            })
        }
    });

    document.querySelector('body').addEventListener('mousemove', e => {
        mouseCoords(e);
    });

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
        });

        links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
        });
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
        });

        buttons[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
        });
    }

    

    document.querySelector('body').addEventListener('mouseover', e => {
        cursor.classList.remove('hidden');
        if (e.target.closest('.footer')) {
            cursor.classList.add('white');
        }
        if (e.target.closest('.menu-toggle-cont')) {
            cursor.classList.add('active');
        }
        if (e.target.closest('.fixed-menu')) {
            cursor.classList.add('white');
        }
        if (e.target.closest('.projects-block__item')) {
            cursor.classList.add('text');
        }
        if (e.target.closest('.swiper-buttons')) {
            cursor.classList.add('hidden');
        }    
        if (e.target.closest('.faq')) {
            cursor.classList.add('white');
        } 
        if (e.target.closest('.accordion-button')) {
            cursor.classList.add('active');
        } 
    })

    document.querySelector('body').addEventListener('mouseout', e => {
        cursor.classList.add('hidden');
        if (e.target.closest('.footer')) {
            cursor.classList.remove('white');
        }
        if (e.target.closest('.menu-toggle-cont')) {
            cursor.classList.remove('active');
        }
        if (e.target.closest('.fixed-menu')) {
            cursor.classList.remove('white');
        }
        if (e.target.closest('.projects-block__item')) {
            cursor.classList.remove('text');
        }
        if (e.target.closest('.faq')) {
            cursor.classList.remove('white');
        }  
        if (e.target.closest('.accordion-button')) {
            cursor.classList.remove('active');
        }     
    })

    
    const reviewsSlider = new Swiper(".reviews-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,        
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".reviews-next",
            prevEl: ".reviews-prev",
        },
        breakpoints: {
            768: {
                autoHeight: true,
            }
        }
    });
    
    $('.grid').masonry({
        itemSelector: '.grid-item',
    });

    /* 16 11 */
    window.addEventListener('scroll', function () {
		if (document.querySelector('.header')) {
			if (window.scrollY > 1) {
				document.querySelector('.header').classList.add('header-sticky');
			} else {
				document.querySelector('.header').classList.remove('header-sticky');
			}
		}
	});
    /* end 16 11 */


    /* 05 12 */
    $( ".bg_block_inner" ).mouseenter(function(e) {
        var parentOffset = $(this).offset(); 
       
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".bg_block_circle").css({"left": relX, "top": relY });
        // $(this).prev(".bg_block_circle").css({"width": relX + 500, "height": relY + 500 });
        $(this).prev(".bg_block_circle").removeClass("desplode-circle");
        $(this).prev(".bg_block_circle").addClass("explode-circle");
        // if (relX < 50) {
        //     $(this).prev(".bg_block_circle").css({"left": 0});
        // } else {
        //     $(this).prev(".bg_block_circle").css({"left": '50%'});
        // }
     
    });
     
    $( ".bg_block_inner" ).mouseleave(function(e) {
     
          var parentOffset = $(this).offset(); 
     
          var relX = e.pageX - parentOffset.left;
          var relY = e.pageY - parentOffset.top;
          $(this).prev(".bg_block_circle").css({"left": relX, "top": relY });
          $(this).prev(".bg_block_circle").removeClass("explode-circle");
          $(this).prev(".bg_block_circle").addClass("desplode-circle");
     
    });
    /* end 05 12 */
    
    /* 18 01 */
    const scrollUpBtn = document.querySelector('.scroll-up');
	const windowInnerHeight = document.documentElement.clientHeight;

	if (scrollUpBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > windowInnerHeight) {
                scrollUpBtn.classList.add('show');
            } else {
                scrollUpBtn.classList.remove('show');
            }
        });
		scrollUpBtn.addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		});
		
	}
    /* end 18 01 */
});