const watchlistToastEl = document.getElementById("watchlist-toast");
const watchlistToast = new bootstrap.Toast(watchlistToastEl);
const watchlistToastContent = watchlistToastEl.querySelector(".toast-content");
const watchlistToastMessage = watchlistToastEl.querySelector(
  ".watchlist-toast-message"
);

const displayToast = function (
  notification,
  errorMessage = "Something went wrong"
) {
  let bgColor = "";
  let message = "";

  if (notification === "add") {
    bgColor = "var(--toast-bg-green)";
    message = "Movie added to watchlist";
  }
  if (notification === "added") {
    bgColor = "var(--toast-bg-red)";
    message = "Movie already in watchlist";
  }
  if (notification === "removed") {
    bgColor = "var(--toast-bg-red)";
    message = "Movie deleted from watchlist";
  }
  if (notification === "rate") {
    bgColor = "var(--color-primary)";
    message = "Movie added to ratings";
  }
  if (notification === "rated") {
    bgColor = "var(--color-primary)";
    message = "Movie already rated";
  }
  if (notification === "rate changed") {
    bgColor = "var(--color-primary)";
    message = "Movie rating has been changed";
  }
  if (notification === "error") {
    bgColor = "var(--toast-bg-red)";
    message = errorMessage;
  }

  watchlistToastContent.style.backgroundColor = bgColor;
  watchlistToastMessage.textContent = message;
  watchlistToast.show();
};

export default displayToast;
