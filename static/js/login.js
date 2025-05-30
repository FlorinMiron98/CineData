import { renderWatchlistItem } from "./renderWatchlistItem.js";
import { renderRatingItem } from "./renderRatingItem.js";
import displayToast from "./displayToast.js";

const watchlistPlaceholder = document.querySelector(
  ".watchlist-empty-paragraph"
);
const ratingsPlaceholder = document.querySelector(".ratings-empty-paragraph");

// Fetch the watchlist movies from the database
const fetchWatchlistMovies = async function () {
  try {
    const response = await fetch("/watchlist");
    const data = await response.json();

    if (data.length > 0) {
      watchlistPlaceholder.classList.add("d-none");
      for (const movieItem of data) {
        renderWatchlistItem(movieItem);
      }
    }
  } catch (error) {
    const message =
      "Something went wrong while trying to fetch your saved movies";
    displayToast("error", message);
  }
};

// Fetch the rated movies from the database
const fetchRatedMovies = async function () {
  try {
    const response = await fetch("/ratings");
    const data = await response.json();

    if (data.length > 0) {
      ratingsPlaceholder.classList.add("d-none");
      for (const movieItem of data) {
        renderRatingItem(movieItem, movieItem.userRating);
      }
    }
  } catch (error) {
    const message = "Something went wrong while trying to fetch your ratings";
    displayToast("error", message);
  }
};

// Fetch the watchlist movies and rated movies once the pages has loaded
const handleLoadStoredMovies = function () {
  document.addEventListener("DOMContentLoaded", () => {
    fetchWatchlistMovies();
    fetchRatedMovies();
  });
};

export default handleLoadStoredMovies;
