const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

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

export default handleTabClick;
