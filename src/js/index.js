$(document).ready(function() {
	$(".nav-link, .scroll-top").click(function(e) {
		let target = $(this).attr('href');
		let from = $(target).offset().top;
		$('html, body').animate({
			scrollTop: from
		}, 1000);
		return false;
	})
	
	const map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 53.912732780101635, lng: 27.569198115906357},
			zoom: 15
	});
	// let marker = new google.maps.Marker({
	// 		position: position,
	// 		map: map,
	// 		icon: 'img/marker.png'
	// });
})