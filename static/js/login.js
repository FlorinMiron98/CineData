import { renderWatchlistItem } from "./renderWatchlistItem.js";

const watchlistPlaceholder = document.querySelector(
  ".watchlist-empty-paragraph"
);

const fetchStoredMovies = async function () {
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

const handleLoadStoredMovies = function () {
  document.addEventListener("DOMContentLoaded", () => {
    fetchStoredMovies();
  });
};

export default handleLoadStoredMovies;
