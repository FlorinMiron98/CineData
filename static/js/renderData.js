import { fetchMovieData } from "./fetchMovieData.js";

const main = document.querySelector("main");
const searchResultsContainer = document.querySelector(".search-results");
const loader = document.querySelector(".loader");

// Display the loading spinner from movie search
const renderSpinner = function () {
  loader.classList.remove("d-none");
};

// Hide the loading spinner from movie search
const hideSpinner = function () {
  loader.classList.add("d-none");
};

// Create the markup for each search result
const displaySearchResults = function (movies) {
  searchResultsContainer.innerHTML = "";

  const markup = movies
    .map((movie) => {
      return `
    <div class="card" data-movie-title="${movie.Title}" data-movie-id="${movie.imdbID}" data-movie-poster="${movie.Poster}">
      <div class="card-img-container">
        <img src="${movie.Poster}" onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';" class="card-img-top h-100" alt="${movie.Title} Poster" />
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-1">${movie.Title}</h5>
        <p class="card-text mb-4">
          <span class="fw-bold">Year:</span> ${movie.Year}
        </p>
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <button class="add-to-watchlist-btn btn btn-sm btn-primary fw-bold border-0" data-bs-toggle="toast" data-bs-target="#liveToast">Add to Watchlist</button>
          <button class="movie-info-btn border-0" data-bs-toggle="modal" data-bs-target="#movieDetailsModal" aria-label="Movie Details">
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </div>
    </div>    
    `;
    })
    .join("");

  // Insert the search results to the container
  searchResultsContainer.insertAdjacentHTML("afterbegin", markup);
};

// Create the functionality for displaying the movie details dialog based on the movie id
searchResultsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".movie-info-btn")) {
    const actionType = "display dialog";
    const movieInfoBtn = e.target.closest(".movie-info-btn");
    const selectedMovieCard = movieInfoBtn.closest(".card");
    const movieImdbID = selectedMovieCard.dataset.movieId;

    fetchMovieData(movieImdbID, actionType);
  }
});

export { main, renderSpinner, hideSpinner, displaySearchResults };
