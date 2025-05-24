import { API_KEY } from "./config.js";
import { renderMovieDetails, renderSpinner } from "./renderMovieDialog.js";

const fetchMovieData = async function (movieId) {
  try {
    renderSpinner();

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    const data = await response.json();
    console.log(data);

    renderMovieDetails(data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieData };
