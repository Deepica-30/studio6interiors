
// Section 1: Home Slider functionality
let homeSlider = 0;
const slidesHome = document.querySelectorAll('.slider-image');
const prevButtonHome = document.getElementById('prev-home');
const nextButtonHome = document.getElementById('next-home');

function showSlideHome(index) {
  if (index < 0) {
    homeSlider = slidesHome.length - 1;
  } else if (index >= slidesHome.length) {
    homeSlider = 0;
  } else {
    homeSlider = index;
  }

  const sliderContainer = document.querySelector('.home-slider');
  sliderContainer.style.transform = `translateX(-${homeSlider * 100}%)`;
}

prevButtonHome.addEventListener('click', () => showSlideHome(homeSlider - 1));
nextButtonHome.addEventListener('click', () => showSlideHome(homeSlider + 1));

setInterval(() => showSlideHome(homeSlider + 1), 2500); // Automatic slide change every 5 seconds

    // Section 7: Testimonial Slider functionality
   document.addEventListener("DOMContentLoaded", function () {
    const testimonialSlider = document.getElementById('testimonial-slider');
    const prevButtonTestimonial = document.getElementById('prev');
    const nextButtonTestimonial = document.getElementById('next');
    const slidesTestimonial = document.querySelectorAll('.testimonial-slide');
    let currentSlideTestimonial = 0; // Track the current slide for Testimonial Slider

    // Function to show the current slide in Testimonial Slider
    function showSlideTestimonial() {
      const offset = -currentSlideTestimonial * 100; // Offset by 100% for each slide (3 testimonials per slide)
      testimonialSlider.style.transform = `translateX(${offset}%)`; // Move the testimonial slider
    }

    // Next button functionality for Testimonial Slider
    nextButtonTestimonial.addEventListener('click', function () {
      if (currentSlideTestimonial < slidesTestimonial.length - 1) {
        currentSlideTestimonial++; // Go to the next slide
      } else {
        currentSlideTestimonial = 0; // Go back to the first slide
      }
      showSlideTestimonial();
    });

    // Previous button functionality for Testimonial Slider
    prevButtonTestimonial.addEventListener('click', function () {
      if (currentSlideTestimonial > 0) {
        currentSlideTestimonial--; // Go to the previous slide
      } else {
        currentSlideTestimonial = slidesTestimonial.length - 1; // Go to the last slide
      }
      showSlideTestimonial();
    });

    // Initialize the first slide for Testimonial Slider
    showSlideTestimonial();
  });

document.querySelectorAll('.shortcut-button').forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
