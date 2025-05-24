import { API_KEY } from "./config.js";
import {
  main,
  renderSpinner,
  hideSpinner,
  displaySearchResults,
} from "./renderData.js";
import handleTabClick from "./tabs.js";

const searchMovieInput = document.getElementById("movie-name");
const searchMovieForm = document.getElementById("search-movie-form");

const fetchData = async function (apiKey, inputValue) {
  try {
    renderSpinner();

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`
    );
    const data = await response.json();

    hideSpinner();

    main.classList.remove("d-none");
    displaySearchResults(data.Search);
    main.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.log(error);
  }
};

searchMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(API_KEY, searchMovieInput.value);
});

handleTabClick();
