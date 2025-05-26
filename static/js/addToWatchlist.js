import { fetchMovieData } from "./fetchMovieData.js";
import { watchlistContainer } from "./renderWatchlistItem.js";

const watchlistToastEl = document.getElementById("watchlist-toast");
const watchlistToast = new bootstrap.Toast(watchlistToastEl);
const watchlistToastContent = watchlistToastEl.querySelector(".toast-content");
const watchlistToastMessage = watchlistToastEl.querySelector(
  ".watchlist-toast-message"
);

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
          watchlistToastContent.style.backgroundColor = "var(--toast-bg-red)";
          watchlistToastMessage.textContent = "Movie already in watchlist";
          watchlistToast.show();

          return;
        }
      }

      fetchMovieData(movieId, actionType);

      watchlistToastContent.style.backgroundColor = "var(--toast-bg-green)";
      watchlistToastMessage.textContent = "Movie added to watchlist";
      watchlistToast.show();
    }
  });
};

export default handleAddToWatchlist;
