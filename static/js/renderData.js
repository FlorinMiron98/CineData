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
        <img src="${movie.Poster}" onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';" class="card-img-top h-100 w-100 object-fit-cover" alt="${movie.Title} Poster" />
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-1">${movie.Title}</h5>
        <p class="card-text mb-4">
          <span class="fw-bold">Year:</span> ${movie.Year}
        </p>
        <div class="d-flex justify-content-between mt-auto">
          <a href="#" class="btn btn-sm btn-primary">Add to Watchlist</a>
          <button>
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

export { renderSpinner, hideSpinner, displaySearchResults };
