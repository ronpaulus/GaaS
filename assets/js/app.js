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
	responsive: {
		320: {
			items: 2,
		},
		640: {
			items: 3,
		},
		768: {
			items: 4,
		},
		1024: {
			items: 6,
		},
	},
});

const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const submenu = document.querySelectorAll(".hasSubmenu");

window.addEventListener("scroll", function () {
	if (window.pageYOffset >= 100) {
		header.classList.add("fixed");
	} else {
		header.classList.remove("fixed");
	}
});

menuToggle.addEventListener("click", function () {
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
	if (!menuToggle.classList.contains("active")) {
		submenu.forEach((el) => el.classList.remove("show"));
	}
});

submenu.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.target.classList.toggle("show");
		submenu.forEach((item) => {
			el !== item && item.classList.remove("show");
		});
	});
});
