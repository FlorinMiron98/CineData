import { API_KEY } from "./config.js";
import { renderMovieDetails, renderSpinner } from "./renderMovieDialog.js";
import { renderWatchlistItem } from "./renderWatchlistItem.js";
import { addToWatchlistDB } from "./addToWatchlist.js";
import { selectedRating } from "./displayRatingDialog.js";
import { renderRatingItem } from "./renderRatingItem.js";

// The actionType parameter checks if the fetched data is for displaying the dialog, adding a movie to watchlist or rating a movie
const fetchMovieData = async function (movieId, actionType) {
  try {
    if (actionType === "display dialog") {
      renderSpinner();
    }

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    const data = await response.json();
    console.log(data);

    if (actionType === "display dialog") {
      renderMovieDetails(data);
    }
    if (actionType === "add to watchlist") {
      renderWatchlistItem(data);
      addToWatchlistDB(data);
    }
    if (actionType === "add to rating") {
      renderRatingItem(data, selectedRating);
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieData };
