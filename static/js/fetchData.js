import {
  main,
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

    main.classList.remove("d-none");
    displaySearchResults(response.Search);
    main.scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
