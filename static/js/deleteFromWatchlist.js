import displayToast from "./displayToast.js";

const watchlistContainer = document.querySelector(".watchlist-container");
const watchlistPlaceholder = document.querySelector(
  ".watchlist-empty-paragraph"
);

// Create the functionality for deleting a movie from the database watchlist
const deleteFromWatchlistDB = async function (movieId) {
  try {
    const response = await fetch(`/delete_from_watchlist/${movieId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await response.json();
  } catch (error) {
    const message =
      "Something went wrong while trying to remove movie from watchlist";
    displayToast("error", message);
  }
};

//
const handleDeleteFromWatchlist = function () {
  watchlistContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const removeBtn = e.target;
      const movieEl = removeBtn.closest("[data-movie-id]");
      const movieId = movieEl.dataset.movieId;

      [...watchlistContainer.children].filter((movie) => {
        movie.dataset.movieId !== movieId;
      });

      movieEl.remove();

      if ([...watchlistContainer.children].length === 1) {
        watchlistPlaceholder.classList.remove("d-none");
      }

      displayToast("removed");

      deleteFromWatchlistDB(movieId);
    }
  });
};

export default handleDeleteFromWatchlist;
