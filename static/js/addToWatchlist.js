import { fetchMovieData } from "./fetchMovieData.js";
import { watchlistContainer } from "./renderWatchlistItem.js";
import displayToast from "./displayToast.js";

// Create the functionality for adding a movie to the database watchlist
const addToWatchlistDB = async function (fetchedData) {
  const movieData = {
    title: fetchedData.Title,
    release_date: fetchedData.Released,
    rating: fetchedData.imdbRating,
    poster_url: fetchedData.Poster,
    movie_id: fetchedData.imdbID,
  };

  try {
    const response = await fetch("/add_to_watchlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    });
    const data = await response.json();
  } catch (error) {
    const message =
      "Something went wrong while trying to add movie to watchlist";
    displayToast("error", message);
  }
};

// Create the functionality for handling adding movies to watchlist
// As the user can add movies to watchlist from both the search results and the movie details modal, I am using the event delegation on the body element to check for the target element of the click event (in our case, the button containing the 'add-to-watchlist-btn' class)
const handleAddToWatchlist = function () {
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-watchlist-btn")) {
      const movieIdParent = e.target.closest("[data-movie-id]");
      const movieId = movieIdParent.dataset.movieId;
      // Set the action type for the fetch function
      const actionType = "add to watchlist";

      const addedMovies = watchlistContainer.children;
      for (const item of addedMovies) {
        // Hide the placeholder paragraph once the user starts adding movies to watchlist
        if (item.classList.contains("watchlist-empty-paragraph")) {
          item.classList.add("d-none");
        }
        // Check if the movie is already in watchlist and return immediately if that's the case
        if (item.dataset.movieId === movieId) {
          displayToast("added");

          return;
        }
      }

      fetchMovieData(movieId, actionType);

      // Display a notification for the user
      displayToast("add");
    }
  });
};

export default handleAddToWatchlist;
export { addToWatchlistDB };
