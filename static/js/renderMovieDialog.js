const movieModalContent = document.querySelector(".modal-content");

const renderSpinner = function () {
  movieModalContent.innerHTML = "";

  const markup = `
      <div class="d-flex justify-content-center py-5">
        <div class="loader-spinner"></div>
      </div>
    `;
  movieModalContent.insertAdjacentHTML("afterbegin", markup);
};

const renderMovieDetails = function (data) {
  movieModalContent.innerHTML = "";

  const markup = `
    <div class="modal-header">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="modal-poster-container">
          <img
            src=${data.Poster}
            onerror="this.onerror=null; this.src='/static/assets/images/movie-fallback.jpg';"
            class="h-100 object-fit-cover"
            alt="${data.Title} Poster"
          />
        </div>
        <div class="modal-movie-details">
          <h1 class="display-5 fw-bold">${data.Title}</h1>
          <div class="modal-movie-about">
            <h2 class="mb-3 fs-4">About the Movie</h2>
            <table class="table">
              <tr>
                <th>Release Date:</th>
                <td>${data.Released}</td>
              </tr>
              <tr>
                <th>Country:</th>
                <td>${data.Country}</td>
              </tr>
              <tr>
                <th>Genre:</th>
                <td>${data.Genre}</td>
              </tr>
              <tr>
                <th>Actors:</th>
                <td>${data.Actors}</td>
              </tr>
              <tr>
                <th>Director:</th>
                <td>${data.Director}</td>
              </tr>
              <tr>
                <th>Time:</th>
                <td>${data.Runtime}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td class="fw-bold"><i class="fa-solid fa-star"></i> ${data.imdbRating}/10</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="movie-plot mb-0">
          <h2 class="fw-5">Plot</h2>
          <p class="mb-0">
            ${data.Plot}
          </p>
        </div>
      </div>
      <div class="modal-footer justify-content-start" data-movie-title="${data.Title}" data-movie-id="${data.imdbID}" data-movie-poster="${data.Poster}">
        <button type="button" class="add-to-watchlist-btn btn btn-primary fw-bold border-0" data-bs-toggle="toast" data-bs-target="#liveToast">
          Add to Watchlist
        </button>
        <button type="button" class="rating-btn btn btn-primary fw-bold border-0">
          Add Rating
        </button>
      </div>
    `;
  movieModalContent.insertAdjacentHTML("afterbegin", markup);
};

export { renderMovieDetails, renderSpinner };
