let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	updateSlide();
});

nextButton.addEventListener('click', () => {
	currentSlide++;
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	updateSlide();
});

function updateSlide() {
	slides.forEach((slide, index) => {
		slide.style.opacity = index === currentSlide ? 1 : 0;
	});
}

