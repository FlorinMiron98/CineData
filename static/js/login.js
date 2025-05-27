import { renderWatchlistItem } from "./renderWatchlistItem.js";
import { renderRatingItem } from "./renderRatingItem.js";

const watchlistPlaceholder = document.querySelector(
  ".watchlist-empty-paragraph"
);
const ratingsPlaceholder = document.querySelector(".ratings-empty-paragraph");

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
    console.log(error);
  }
};

const fetchRatedMovies = async function () {
  try {
    const response = await fetch("/ratings");
    const data = await response.json();

    if (data.length > 0) {
      ratingsPlaceholder.classList.add("d-none");
      for (const movieItem of data) {
        console.log(movieItem);

        renderRatingItem(movieItem, movieItem.userRating);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const handleLoadStoredMovies = function () {
  document.addEventListener("DOMContentLoaded", () => {
    fetchWatchlistMovies();
    fetchRatedMovies();
  });
};

export default handleLoadStoredMovies;
