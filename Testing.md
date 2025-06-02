# CineData - Testing

## [Main README.md File](https://github.com/FlorinMiron98/CineData/blob/main/README.md)

## Table of Contents
1. [Validator Testing](#validator-testing)
2. [Performance, Accessibility and Best Practices Testing](#performance-accessibility-and-best-practices-testing)
3. [Manual Testing](#manual-testing)
4. [Bugs](#bugs)

## Validator Testing
1. [W3C Markup Validator](https://validator.w3.org/)

Some validation errors or warnings may appear when checking the HTML files. These are expected and are due to the use of Jinja2 templating syntax. Since the W3C validator analyzes static HTML, it does not recognize or process Jinja2 syntax, which is rendered dynamically by the Flask backend. As a result, it may incorrectly flag these template tags as errors.
When rendered in the browser via Flask, the templates output valid HTML. Therefore, these validation errors can be safely ignored during development. If needed, templates can be tested by:
- Rendering them in the browser
- Viewing the page source
- Copying the rendered HTML into the W3C validator
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

The result for CSS file checking is "Congratulations! No Error Found."

![css-validator](https://github.com/user-attachments/assets/78b74670-5a6b-4108-beea-30480a1bc9ca)

## Performance, Accessibility and Best Practices Testing
Performance, accessibility, and best practices tests were conducted using [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview). The results help ensure the application is optimized for speed, user accessibility, and adherence to modern development standards. Results for each page:
- Register/Login page (index.html)
  - **Performance**: 100
  - **Accessibility**: 99
  - **Best Practices**: 96
  
    ![index](https://github.com/user-attachments/assets/8c5e0433-51f7-4196-bf72-fde75422fb57)

- Main page (search.html)
  - **Performance**: 100
  - **Accessibility**: 100
  - **Best Practices**: 100

    ![search](https://github.com/user-attachments/assets/38860c6c-861d-4fb8-943b-ef22581a5f86)

## Manual Testing
The following tables outlines the results of manual testing conducted based on user stories to ensure the application behaves as expected and meets user requirements.
1. As a new user, I want to create an account and log in to the website, so that I can access personalized features like managing my watchlist, rating movies, and saving my preferences.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Submit valid username, email, and password | User is redirected to homepage | Passed |
   | Attempt to register with an already used username | App displays a clear error message preventing duplicate account creation | Passed |
   | Submit the registration form with missing required fields | Form does not submit, and validation errors are shown | Passed |
   | Log in using correct credentials | User is successfully logged in and redirected to their dashboard | Passed |
   | Log in with incorrect username or password | App shows an appropriate error message about inexistent username or incorrect password | Passed |
   | After login, navigate to personalized features | Access is granted and personalized data is displayed | Passed |
   | Try accessing personalized features without logging in | User sees an "Access Denied" message | Passed |
   | Check password is stored securely | Password is hashed and salted using `werkzeug.security` | Passed |
2. As a movie enthusiast, I want to search for movies by title, so that I can find detailed information on movies I’m interested in quickly.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Enter a full movie title into the search bar and submit | A list of relevant matching movies is shown | Passed |
   | Submit an empty search query | An appropriate message is shown | Passed |
   | Search for a non-existent or misspelled title | App displays a "No results found" message | Passed |
   | Click on 'Movie Details' button from a search result | A details dialog is displayed for the user | Passed |
3. As a logged-in user, I want to add movies to my personal watchlist and manage them, so that I can keep track of the movies I plan to watch and easily access them later.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Search for a movie and click the 'Movie Details' button | Movie details are displayed along with an option to add to watchlist | Passed |
   | Click "Add to Watchlist" while logged in | Movie is added to the user's watchlist and a confirmation message is shown | Passed |
   | Navigate to the watchlist tab | All previously added movies are displayed | Passed |
   | Remove a movie from the watchlist | Movie is successfully removed and the watchlist updates without needing a page reload | Passed |
   | Attempt to add the same movie to the watchlist again | App prevents duplicates and gives a message that the movie is already in the watchlist | Passed |
4. As a movie viewer, I want to rate movies I’ve watched, so that I can track my own opinions on movies and help others find movies based on ratings.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Search for a movie and click the 'Movie Details' button | Rating button is visible | Passed |
   | Submit a rating for a movie | Rating is saved and a confirmation is shown | Passed |
   | Check the movie detail tab after rating a movie | A list of rated movies should be displayed | Passed |
   | Update an existing rating for a movie | Previous rating is updated successfully and reflects immediately | Passed |
5. As a user, I want to click on a movie from the search results to view detailed information, so that I can learn more about the movie’s plot, director, cast, and ratings.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Perform a search and click on the 'Movie Details' button of one of the search results | A movie details modal is displayed for the user | Passed |
   | Check that the movie detail modal displays the plot summary | Plot summary is clearly shown | Passed |
   | Check that the movie detail modal displays the director's name | Director's name is displayed | Passed |
   | Check that the movie detail modal displays the main cast | Cast list appears accurately on the modal | Passed |
   | Check that the movie detail modal displays user ratings | Average user rating is shown | Passed |
6. As a user, I want to access the website on any device (desktop, tablet, or mobile), so that I can enjoy the same seamless experience regardless of my device.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Open the website on a desktop browser | Layout displays correctly. All components are visible and aligned | Passed |
   | Open the website on a tablet | Layout adapts well. Navigation and key content are accessible and readable | Passed |
   | Open the website on a mobile phone Responsive layout adjusts to screen size. No horizontal scrolling needed | Passed |
   | Test movie search, login, and navigation on mobile | All interactive features function correctly on mobile | Passed |
   | Check that images, text, and buttons scale appropriately on smaller screens | UI components resize properly and maintain usability | Passed |
   | Rotate the screen between portrait and landscape on mobile and tablet | Layout dynamically adjusts without breaking or requiring a refresh | Passed |
7. As a user, I want to trust that my personal data and login information are secure, so that I can feel safe while using the website and managing my movie preferences.
   | Test Description | Outcome | Status |
   | ---------------- | ------- | ------ |
   | Register a new account and verify password is not stored in plaintext | Password is hashed and salted in the database using `werkzeug.security` | Passed |
   | Attempt to access the user-specific page without being logged in | Access is denied | Passed |
   | View application logs and confirm no sensitive user data is logged | No personal details are exposed in logs | Passed |

## Bugs
1. **Error**: `Uncaught TypeError: Cannot read properties of null (reading 'querySelector')`
   - This error occurs in the browser console when the user first accesses the website, specifically on the login or registration page. It is triggered by JavaScript attempting to access an element that does not exist on that specific page.
   - This error **does not affect** the functionality or user experience of the application. All features continue to work as expected.
   ![error](https://github.com/user-attachments/assets/5f90064a-f6d6-439a-8484-f62580e7e46c)

