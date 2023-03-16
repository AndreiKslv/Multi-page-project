const btn = document.querySelector('.burger-menu');
const div = document.querySelector('.menu');

btn.addEventListener('click', () => {
	div.classList.toggle('burger-menu--active')
});


const body = document.querySelector('body');

btn.addEventListener('click', () => {
	body.classList.toggle('lock')
});


$(function () {
	$('.menu__button').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__button').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.promo-slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	});

	$('.contact-slider__slick').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 10,
		slidesToScroll: 10,
		responsive: [
			{
			breakpoint: 1510,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 8,
			}
			},

			{
			breakpoint: 1320,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 5,
				dots: false,
			}
			},

			{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
				dots: false,
			}
			},

			{
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: false,
			}
			},

			{
			breakpoint: 400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: false,
			}
			},
		  ]
	});

	$('.article-slider__box').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--left"><img src="assets/images/common/left-arrow.svg" alt="image arrow left"></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow--right"><img src="assets/images/common/right-arrow.svg" alt="image arrow right"></button>',
	});

	$('.gallery-one__inner').slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
		  ]
	  });

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.category-a'
		}
	});
})

Fancybox.bind("[data-fancybox]", {
	// Your custom options
  });