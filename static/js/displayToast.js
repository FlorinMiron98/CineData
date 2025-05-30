const watchlistToastEl = document.getElementById("watchlist-toast");
const watchlistToast = new bootstrap.Toast(watchlistToastEl);
const watchlistToastContent = watchlistToastEl.querySelector(".toast-content");
const watchlistToastMessage = watchlistToastEl.querySelector(
  ".watchlist-toast-message"
);

// This function will dynamically create the text content and the styling for the notification displayed for the user based on their interaction
const displayToast = function (
  notification,
  errorMessage = "Something went wrong"
) {
  let bgColor = "";
  let message = "";

  // Add movie to watchlist
  if (notification === "add") {
    bgColor = "var(--toast-bg-green)";
    message = "Movie added to watchlist";
  }

  // Selected movie is already in the watchlist
  if (notification === "added") {
    bgColor = "var(--toast-bg-red)";
    message = "Movie already in watchlist";
  }

  // Movie removed from the watchlist
  if (notification === "removed") {
    bgColor = "var(--toast-bg-red)";
    message = "Movie deleted from watchlist";
  }

  // Rate a movie
  if (notification === "rate") {
    bgColor = "var(--color-primary)";
    message = "Movie added to ratings";
  }

  // The selected movie has already been rated
  if (notification === "rated") {
    bgColor = "var(--color-primary)";
    message = "Movie already rated";
  }

  // Change the rating to a movie
  if (notification === "rate changed") {
    bgColor = "var(--color-primary)";
    message = "Movie rating has been changed";
  }

  // Error
  if (notification === "error") {
    bgColor = "var(--toast-bg-red)";
    message = errorMessage;
  }

  watchlistToastContent.style.backgroundColor = bgColor;
  // As the error can occur in multiple situations, the text content of the error will be added dynamically
  watchlistToastMessage.textContent = message;
  watchlistToast.show();
};

export default displayToast;
