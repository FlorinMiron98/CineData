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

    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`
    );
    const response = await data.json();

    hideSpinner();

    main.classList.remove("d-none");
    displaySearchResults(response.Search);
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
