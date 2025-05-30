import { fetchMovieData } from "./fetchMovieData.js";
import { ratingsContainer } from "./renderRatingItem.js";
import { ratingStarsDialog } from "./displayRatingDialog.js";
import { selectedRating } from "./displayRatingDialog.js";
import displayToast from "./displayToast.js";

const submitRatingBtn = document.querySelector(".submit-rating-btn");

// Create the data for a movie rating and send it to the database
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
  } catch (error) {
    const message =
      "Something went wrong while trying to rate movie. Please try again";
    displayToast("error", message);
  }
};

// Use a PUT request to modify the rating value in the database
const changeRatingDB = async function (movieTitle, newRating) {
  try {
    const response = await fetch("/update_rating", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: movieTitle,
        rating: parseInt(newRating),
      }),
    });
    const data = await response.json();
  } catch (error) {
    const message = "Something went wrong while trying to change movie rating";
    displayToast("error", message);
  }
};

// Create the functionality for handling the click event on the submit button from the rating stars dialog
const handleAddToRating = function () {
  // Use an anonymous function instead of arrow function to avoid losing the value of the 'this' keyword
  submitRatingBtn.addEventListener("click", function () {
    const movieEl = this.closest("[data-movie-id]");
    const movieId = movieEl.dataset.movieId;
    const addedRatings = ratingsContainer.children;

    const rateType = ratingStarsDialog.dataset.rateType;

    // Initiate the action type variable (add initial rating or change the rating)
    let actionType;

    // Action type is rating a movie
    if (rateType === "rate") {
      actionType = "add to rating";

      for (const item of addedRatings) {
        // Hide the placeholder paragraph
        if (item.classList.contains("ratings-empty-paragraph")) {
          item.classList.add("d-none");
        }

        // Check if movie is already in ratings adn return immediately if that's the case
        if (item.dataset.movieId === movieId) {
          displayToast("rated");

          // Close the ratings dialog
          ratingStarsDialog.close();

          return;
        }
      }

      // Pass the action type as an argument
      fetchMovieData(movieId, actionType);

      // Close the ratings dialog
      ratingStarsDialog.close();

      // Display a notification for the user
      displayToast("rate");
    }

    // Action type is change the rating for a movie
    if (rateType === "change") {
      for (const item of addedRatings) {
        if (item.dataset.movieId === movieId) {
          const ratingUserValue = item.querySelector(".rating-user-value");
          const movieTitle =
            item.querySelector(".rating-item-name").textContent;

          ratingUserValue.textContent = selectedRating;

          // Change the rating in the database
          changeRatingDB(movieTitle, selectedRating);

          // Close the ratings dialog
          ratingStarsDialog.close();

          // Display a notification for the user
          displayToast("rate changed");
        }
      }
    }
  });
};

export default handleAddToRating;
export { addToRatingDB };
