$(document).ready(function () {
	$(".client-feedback").owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true,
	});

	$(".brand-list").owlCarousel({
		items: 6,
		nav: false,
		dots: false,
		loop: true,
	});

	window.addEventListener("scroll", function () {
		const header = document.querySelector("header");
		if (window.pageYOffset >= 100) {
			header.classList.add("fixed");
		} else {
			header.classList.remove("fixed");
		}
	});
});
