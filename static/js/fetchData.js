import {
  renderSpinner,
  hideSpinner,
  displaySearchResults,
} from "./renderData.js";

const fetchData = async function (apiKey, inputValue) {
  try {
    renderSpinner();

    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`
    );
    const response = await data.json();

    hideSpinner();
    displaySearchResults(response.Search);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
