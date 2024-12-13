
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
const reviewsContainer = document.getElementById("reviews-container");
const reviewForm = document.getElementById("review-form");
let slideIndex = 0;

// Fetch and display reviews
async function fetchReviews() {
  try {
    const response = await fetch(
      "https://us-central1-studio6-interiors.cloudfunctions.net/getReviews"
    );
    const reviews = await response.json();

    reviewsContainer.innerHTML = reviews
      .map((review, index) => {
        const isSingleSlide = reviews.length === 1;
        const slideStyle = isSingleSlide
          ? "justify-content: center; width: 100%;"
          : "justify-content: space-evenly;";
        return `
          <div class="review-slide" style="${slideStyle}">
            <div class="review-card">
              <h3>${review.name}</h3>
              <p>Rating: ${review.rating} / 5</p>
              <p>${review.review}</p>
            </div>
          </div>`;
      })
      .join("");
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

// Handle review form submission
reviewForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;

  try {
    const response = await fetch(
      "https://<YOUR_FIREBASE_REGION>-<YOUR_PROJECT_ID>.cloudfunctions.net/submitReview",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, review }),
      }
    );

    if (response.ok) {
      alert("Review submitted successfully!");
      reviewForm.reset();
      fetchReviews(); // Refresh reviews
    } else {
      alert("Failed to submit review. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting review:", error);
  }
});

// Initialize reviews
fetchReviews();
