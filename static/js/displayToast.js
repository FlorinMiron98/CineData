const watchlistToastEl = document.getElementById("watchlist-toast");
const watchlistToast = new bootstrap.Toast(watchlistToastEl);
const watchlistToastContent = watchlistToastEl.querySelector(".toast-content");
const watchlistToastMessage = watchlistToastEl.querySelector(
  ".watchlist-toast-message"
);

const displayToast = function (notification) {
  if (notification === "add") {
    watchlistToastContent.style.backgroundColor = "var(--toast-bg-green)";
    watchlistToastMessage.textContent = "Movie added to watchlist";
    watchlistToast.show();
  }
  if (notification === "added") {
    watchlistToastContent.style.backgroundColor = "var(--toast-bg-red)";
    watchlistToastMessage.textContent = "Movie already in watchlist";
    watchlistToast.show();
  }
  if (notification === "removed") {
    watchlistToastContent.style.backgroundColor = "var(--toast-bg-red)";
    watchlistToastMessage.textContent = "Movie deleted from watchlist";
    watchlistToast.show();
  }
  if (notification === "rate") {
    watchlistToastContent.style.backgroundColor = "var(--color-primary)";
    watchlistToastMessage.textContent = "Movie added to ratings";
    watchlistToast.show();
  }
  if (notification === "rated") {
    watchlistToastContent.style.backgroundColor = "var(--color-primary)";
    watchlistToastMessage.textContent = "Movie already rated";
    watchlistToast.show();
  }
};

export default displayToast;
