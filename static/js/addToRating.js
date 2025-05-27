import { fetchMovieData } from "./fetchMovieData.js";
import { ratingsContainer } from "./renderRatingItem.js";
import { ratingStarsDialog } from "./displayRatingDialog.js";
import displayToast from "./displayToast.js";

const submitRatingBtn = document.querySelector(".submit-rating-btn");

const addToRatingDB = async function (fetchedData, userRating) {
  const movieData = {
    title: fetchedData.Title,
    release_date: fetchedData.Released,
    poster_url: fetchedData.Poster,
    movie_id: fetchedData.imdbID,
    user_rating: userRating,
  };

  try {
    const response = await fetch(`/add_to_rating`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const handleAddToRating = function () {
  // Use an anonymous function instead of arrow function to avoid losing the value of the 'this' keyword
  submitRatingBtn.addEventListener("click", function () {
    const movieEl = this.closest("[data-movie-id]");
    const movieId = movieEl.dataset.movieId;
    const actionType = "add to rating";

    const addedRatings = ratingsContainer.children;
    for (const item of addedRatings) {
      // Hide the placeholder paragraph
      if (item.classList.contains("ratings-empty-paragraph")) {
        item.classList.add("d-none");
      }

      // Check if movie is already in ratings
      if (item.dataset.movieId === movieId) {
        displayToast("rated");

        ratingStarsDialog.close();

        return;
      }
    }

    fetchMovieData(movieId, actionType);

    ratingStarsDialog.close();

    displayToast("rate");
  });
};

export default handleAddToRating;
export { addToRatingDB };
