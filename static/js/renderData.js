import { fetchMovieData } from "./fetchMovieData.js";

const main = document.querySelector("main");
const searchResultsContainer = document.querySelector(".search-results");
const loader = document.querySelector(".loader");

const renderSpinner = function () {
  loader.classList.remove("d-none");
};

const hideSpinner = function () {
  loader.classList.add("d-none");
};

const displaySearchResults = function (movies) {
  searchResultsContainer.innerHTML = "";

  const markup = movies
    .map((movie) => {
      return `
    <div class="card" data-movie-id="${movie.imdbID}">
      <div class="card-img-container">
        <img src="${movie.Poster}" onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';" class="card-img-top h-100" alt="${movie.Title} Poster" />
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-1">${movie.Title}</h5>
        <p class="card-text mb-4">
          <span class="fw-bold">Year:</span> ${movie.Year}
        </p>
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <a href="#" class="add-to-watchlist-btn btn btn-sm btn-primary fw-bold border-0">Add to Watchlist</a>
          <button class="movie-info-btn border-0" data-bs-toggle="modal" data-bs-target="#movieDetailsModal" aria-label="Movie Details">
            <i class="fa-solid fa-circle-info"></i>
          </button>
        </div>
      </div>
    </div>    
    `;
    })
    .join("");

  searchResultsContainer.insertAdjacentHTML("afterbegin", markup);
};

searchResultsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".movie-info-btn")) {
    const movieInfoBtn = e.target.closest(".movie-info-btn");
    const selectedMovieCard = movieInfoBtn.closest(".card");
    const movieImdbID = selectedMovieCard.dataset.movieId;

    fetchMovieData(movieImdbID);
  }
});

export { main, renderSpinner, hideSpinner, displaySearchResults };
