$(function () {



	AOS.init();

	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});

	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
	  });

	  var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		centeredSlides: true,
		slidesPerView: 'auto',
		touchRatio: 0.2,
		slideToClickedSlide: true,
	  });
	  galleryTop.controller.control = galleryThumbs;
	  galleryThumbs.controller.control = galleryTop;

	var swiper = new Swiper('.slider-top', {
		spaceBetween: 30,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var swiper = new Swiper('.sl-menu', {
		slidesPerView: 5,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});

	var swiper = new Swiper('.swiper-container-logo', {
		slidesPerView: 5,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	});

	var swiper = new Swiper('.catalog-sl', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	$("div.accordian").accordion({
		heightStyle: "content",
		autoHeight: true,
		collapsible: true,
		active: false,
	});

});