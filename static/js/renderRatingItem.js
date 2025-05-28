const ratingsContainer = document.querySelector(".ratings-container");

const renderRatingItem = function (data, userRating) {
  const markup = `
    <div class="rating-item d-flex p-1 p-sm-3 rounded" data-movie-title="${
      data.Title
    }" data-movie-id="${data.imdbID}" data-movie-poster="${data.Poster}">
            <div class="rating-item-poster">
              <img
                src=${data.Poster}
                class="h-100 w-100 object-fit-cover"
                onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';"
                alt="${data.Title} Poster"
              />
            </div>
            <div class="rating-item-content d-flex flex-column">
              <h3 class="rating-item-name fs-4">${data.Title}</h3>
              <p class="rating-item-release-date">${
                data.Released ? data.Released.split(" ")[2] : "N/A"
              }</p>
              <p class="rating-user mb-0 mt-auto fw-bold">
                User rating: <i class="fa-solid fa-star"></i> <span class="rating-user-value">${userRating}</span>
              </p>
            </div>
            <div class="rating-item-buttons d-flex flex-column ms-auto">
              <button
                class="change-rating-btn btn btn-primary btn-sm border-0 fw-bold"
                data-bs-target="#ratingsModal"
              >
                Change Rating
              </button>
            </div>
    </div>
    `;
  ratingsContainer.insertAdjacentHTML("afterbegin", markup);
};

export { ratingsContainer, renderRatingItem };
