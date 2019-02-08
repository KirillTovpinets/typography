$(document).ready(function() {
	$(".nav-link, .scroll-top").click(function(e) {
		let target = $(this).attr('href');
		let from = $(target).offset().top;
		$('html, body').animate({
			scrollTop: from
		}, 1000);
		return false;
	})
	
	$('#flash').addClass('fadeOut');
	setTimeout(() => {
		$('#flash').hide();
		$('.adv-item').addClass('fadeInUp')
		$('.contact-form').addClass('fadeInRight')
	}, 1000);
	const map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 53.912732780101635, lng: 27.569198115906357},
			zoom: 15
	});
	$('[data-toggle="tooltip"]').tooltip({ boundary: 'window' })
	// let marker = new google.maps.Marker({
	// 		position: position,
	// 		map: map,
	// 		icon: 'img/marker.png'
	// });

	$(window).scroll(function(e){
		let scrolled = $('html').scrollTop();
		console.log(scrolled);	
			if (scrolled > 300){
				$('#services .title.animated').addClass('fadeInUp')
				$('#services .service.animated').addClass('fadeInUp')
			}
			if (scrolled > 800){
				$('#pricelist .title.animated').addClass('fadeInUp')
				$('#pricelist .price-container.animated').addClass('fadeInUp')
			}
			if (scrolled > 1400){
				$('#make-order .title.animated').addClass('fadeInUp')
				$('#make-order .steps-container .animated').addClass('fadeInUp')
			}
			if (scrolled > 2600){
				$('#skills .title.animated').addClass('fadeInUp')
				$('#skills .skill-item.animated').addClass('fadeInUp')
			}
			if (scrolled > 3500){
				$('#partners .title.animated').addClass('fadeInUp')
				$('#partners .partner.animated').addClass('fadeIn')
			}
	})
})