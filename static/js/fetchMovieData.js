import { API_KEY } from "./config.js";
import { renderMovieDetails, renderSpinner } from "./renderMovieDialog.js";
import { renderWatchlistItem } from "./renderWatchlistItem.js";
import { addToWatchlistDB } from "./addToWatchlist.js";
import { selectedRating } from "./displayRatingDialog.js";
import { renderRatingItem } from "./renderRatingItem.js";
import { addToRatingDB } from "./addToRating.js";
import displayToast from "./displayToast.js";

// The actionType parameter checks if the fetched data is for displaying the dialog, adding a movie to watchlist or rating a movie
const fetchMovieData = async function (movieId, actionType) {
  try {
    // Display the loading spinner if the user opens the movie details dialog
    if (actionType === "display dialog") {
      renderSpinner();
    }

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    const data = await response.json();
    console.log(data);

    // Display dialog
    if (actionType === "display dialog") {
      renderMovieDetails(data);
    }

    // Add movie to watchlist
    if (actionType === "add to watchlist") {
      renderWatchlistItem(data);
      addToWatchlistDB(data);
    }

    // Rate a movie
    if (actionType === "add to rating") {
      renderRatingItem(data, selectedRating);
      addToRatingDB(data, selectedRating);
    }
  } catch (error) {
    const message = "Something went wrong when fetching data";
    displayToast("error", message);
  }
};

export { fetchMovieData };
