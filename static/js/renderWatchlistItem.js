const watchlistContainer = document.querySelector(".watchlist-container");

const renderWatchlistItem = function (data) {
  const markup = `
        <div class="watchlist-item d-flex p-1 p-sm-3 rounded" data-movie-id="${
          data.imdbID
        }">
            <img
              src=${data.Poster}
              onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';"
              class="h-100 watchlist-item-poster"
              alt=""
            />
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
                Add rating
              </button>
            </div>
        </div>
    `;

  watchlistContainer.insertAdjacentHTML("afterbegin", markup);
};

export { renderWatchlistItem, watchlistContainer };
