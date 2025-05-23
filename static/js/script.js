import { API_KEY } from "./config.js";
import fetchData from "./fetchData.js";

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const searchMovieInput = document.getElementById("movie-name");
const searchMovieForm = document.getElementById("search-movie-form");

const handleTabClick = function () {
  tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      const tabId = tabButton.getAttribute("data-tab");

      tabButtons.forEach((tabButton) => {
        tabButton.classList.remove("active");
      });
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabButton.classList.add("active");
      const selectedTab = document.getElementById(tabId);
      selectedTab.classList.add("active");
    });
  });
};

searchMovieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchData(API_KEY, searchMovieInput.value);
});

handleTabClick();
