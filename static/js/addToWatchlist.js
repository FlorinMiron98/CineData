import { fetchMovieData } from "./fetchMovieData.js";
import { watchlistContainer } from "./renderWatchlistItem.js";

const handleAddToWatchlist = function () {
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-watchlist-btn")) {
      const movieIdParent = e.target.closest("[data-movie-id]");
      const movieId = movieIdParent.dataset.movieId;
      const actionType = "add to watchlist";

      const addedMovies = watchlistContainer.children;
      for (const item of addedMovies) {
        // Hide the placeholder paragraph
        if (item.classList.contains("watchlist-empty-paragraph")) {
          item.classList.add("d-none");
        }
        // Check if the movie is already in watchlist
        if (item.dataset.movieId === movieId) {
          console.log("Already in watchlist");
          return;
        }
      }

      fetchMovieData(movieId, actionType);
    }
  });
};

export default handleAddToWatchlist;
