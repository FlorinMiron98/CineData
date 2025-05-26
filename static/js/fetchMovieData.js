import { API_KEY } from "./config.js";
import { renderMovieDetails, renderSpinner } from "./renderMovieDialog.js";
import { renderWatchlistItem } from "./renderWatchlistItem.js";
import { addToWatchlistDB } from "./addToWatchlist.js";

// The actionType parameter checks if the fetched data is for displaying the dialog or adding a movie to watchlist
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
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieData };
