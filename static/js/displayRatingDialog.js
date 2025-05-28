const ratingStarsDialog = document.getElementById("rating-stars-dialog");
const ratingStarsContainer = document.querySelector(".rating-stars");
const ratingStarsTitle = document.querySelector(".rating-stars-title");
const userRatingValue = document.querySelector(".user-rating-value");
const closeDialogBtn = document.querySelector(".close-dialog-btn");

const totalStars = 10;

let selectedRating = 1;

// Helper function for highlighting stars
const highlightStars = function (stars, rating, className) {
  stars.forEach((star) => {
    const starValue = +star.getAttribute("data-rating-value");
    star.classList.remove("hovered", "selected");

    if (starValue <= rating) {
      star.classList.add(className);
    }
  });
};

// Create the rating stars
for (let i = 1; i <= totalStars; i++) {
  const star = document.createElement("i");
  star.classList.add("fa-solid");
  star.classList.add("fa-star");
  star.setAttribute("data-rating-value", i);

  if (i === 1) {
    star.classList.add("selected");
  }

  ratingStarsContainer.appendChild(star);
}

const handleSelectHighlightStar = function () {
  const ratingStars = ratingStarsContainer.querySelectorAll(".fa-star");

  ratingStars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      const ratingValue = +star.getAttribute("data-rating-value");
      highlightStars(ratingStars, ratingValue, "hovered");
    });

    star.addEventListener("mouseout", () => {
      highlightStars(ratingStars, selectedRating, "selected");
    });

    star.addEventListener("click", () => {
      selectedRating = +star.getAttribute("data-rating-value");
      userRatingValue.textContent = selectedRating;
      highlightStars(ratingStars, selectedRating, "selected");
    });
  });
};

const handleDisplayRatingDialog = function () {
  document.body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("rating-btn") ||
      e.target.classList.contains("change-rating-btn")
    ) {
      const movieEl = e.target.closest("[data-movie-id]");
      const movieId = movieEl.dataset.movieId;
      const movieTitle = movieEl.dataset.movieTitle;
      const moviePoster = movieEl.dataset.moviePoster;

      if (e.target.classList.contains("rating-btn")) {
        ratingStarsDialog.setAttribute("data-rate-type", "rate");
      }
      if (e.target.classList.contains("change-rating-btn")) {
        ratingStarsDialog.setAttribute("data-rate-type", "change");
      }

      ratingStarsDialog.setAttribute("data-movie-id", movieId);
      ratingStarsDialog.setAttribute("data-movie-title", movieTitle);
      ratingStarsDialog.setAttribute("data-movie-poster", moviePoster);

      ratingStarsTitle.textContent = movieTitle;

      ratingStarsDialog.showModal();
    }
  });
};

closeDialogBtn.addEventListener("click", () => ratingStarsDialog.close());

handleSelectHighlightStar();

export default handleDisplayRatingDialog;
export { selectedRating, ratingStarsDialog };
