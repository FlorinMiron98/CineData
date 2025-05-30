const watchlistContainer = document.querySelector(".watchlist-container");

// Create the functionality for rendering the watchlist movie item
const renderWatchlistItem = function (data) {
  const markup = `
        <div class="watchlist-item d-flex p-1 p-sm-3 rounded" data-movie-title="${
          data.Title
        }" data-movie-id="${data.imdbID}" data-movie-poster="${data.Poster}">
            <div class="watchlist-item-poster">
              <img
                src=${data.Poster}
                onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';"
                class="h-100 w-100 object-fit-cover"
                alt="${data.Title} Poster"
              />
            </div>
            <div class="watchlist-item-content d-flex flex-column">
              <h3 class="watchlist-item-name fs-4">${data.Title}</h3>
              <p class="watchlist-item-release-date">${
                data.Released ? data.Released.split(" ")[2] : "N/A"
              }</p>
              <p class="watchlist-item-rating mb-0 mt-auto">
                <i class="fa-solid fa-star"></i> ${data.imdbRating}/10
              </p>
            </div>
            <div class="watchlist-item-buttons d-flex flex-column ms-auto">
              <button
                class="remove-btn btn btn-primary btn-sm border-0 fw-bold"
              >
                Remove
              </button>
              <button
                class="rating-btn btn btn-primary btn-sm border-0 fw-bold"
              >
                Rate
              </button>
            </div>
        </div>
    `;

  watchlistContainer.insertAdjacentHTML("afterbegin", markup);
};

export { renderWatchlistItem, watchlistContainer };
