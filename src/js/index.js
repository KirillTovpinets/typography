import AWN from "awesome-notifications";

$(document).ready(function() {
	// let options = {
	// 	labels: {
	// 		tip: "Your custom tip box label"
	// 	}
	// }
	// let notifier = new AWN(options);
	// notifier.success('Success message');
	ymaps.ready(init);
	function init() {
		const map = new ymaps.Map('map', {
				center: [53.912732780101635, 27.569198115906357],
				zoom: 15
		});
		map.geoObjects.add(new ymaps.Placemark([53.912732780101635, 27.569198115906357], {
				iconCaption: 'Мы находимся здесь',
		}, {
				preset: 'islands#dotIcon',
				iconColor: '#735184'
		}))
	}
	$('#needAdv, #callback-form').submit(function(event) {
		event.preventDefault();

		const req = $.ajax({
			url: '/mail.php',
			type: 'post',
			data: $(this).serialize()
		})
		req.done((data) => {
			let options = {
				labels: {
					tip: "Your custom tip box label"
				}
			}
			let notifier = new AWN(options);
			notifier.success('Ваше сообщение успешно отправлено');
			$(this)[0].reset();
		})
	})
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
	$('[data-tooltip="true"]').tooltip({ boundary: 'window' })

	$(window).scroll(function(e){
		let scrolled = $('html').scrollTop();
		let width = $('html').outerWidth();
		if(width < 992) {
			return;
		}
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