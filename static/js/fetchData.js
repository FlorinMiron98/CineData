import { API_KEY } from "./config.js";
import {
  main,
  renderSpinner,
  hideSpinner,
  displaySearchResults,
} from "./renderData.js";
import handleTabClick from "./tabs.js";
import handleAddToWatchlist from "./addToWatchlist.js";
import handleLoadStoredMovies from "./login.js";
import handleDeleteFromWatchlist from "./deleteFromWatchlist.js";
import handleDisplayRatingDialog from "./displayRatingDialog.js";
import handleAddToRating from "./addToRating.js";

const searchMovieInput = document.getElementById("movie-name");
const searchMovieForm = document.getElementById("search-movie-form");
const searchError = document.querySelector(".search-error");

// This function will fetch the movies based on the user's input value
const fetchData = async function (apiKey, inputValue) {
  try {
    renderSpinner();

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    hideSpinner();

    main.classList.remove("d-none");
    displaySearchResults(data.Search);
    main.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    searchError.classList.remove("d-none");
    searchError.textContent = error.message;

    hideSpinner();
  }
};

// Handle the submit event on the movie search
searchMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Handle the UI in case there is no search result
  if (!searchError.classList.contains("d-none")) {
    searchError.classList.add("d-none");
  }

  fetchData(API_KEY, searchMovieInput.value);
});

handleTabClick();
handleAddToWatchlist();
handleLoadStoredMovies();
handleDeleteFromWatchlist();
handleDisplayRatingDialog();
handleAddToRating();
