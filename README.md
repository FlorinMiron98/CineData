# CineData

This is a web application inspired by IMDb, built to allow users to browse, search, and view detailed information about movies and TV shows. It features a dynamic user interface, a searchable movie database, and responsive design for an optimal experience across devices.

## Table of Contents
1. [UX](#ux)
   - [Project Goals](#project-goals)
   - [User Stories](#user-stories)
   - Design Choices
2. [Features](https://github.com/FlorinMiron98/CineData/blob/main/README.md)
   - [Register/Login Page](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#registerlogin-page)
   - [Homepage](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#homepage)
     - [Search Movies Tab](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#search-movies-tab)
     - [Watchlist Tab](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#watchlist-tab)
     - [Ratings Tab](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#ratings-tab)
     - [Search Results Section](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#search-results-section)
     - [Movie Details Modal](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#movie-details-modal)
     - [Add/Change Rating Modal](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#addchange-rating-modal)
3. [Technologies Used](#technologies-used)
4. [Data Schema]
5. Testing
6. Deployment
7. [Credits](#credits)
   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
   - [Inspirations](#inspirations)

## UX
### Project Goals
1. Allow users to create accounts and log in
2. Implement a search feature that pulls movie data from the OMDB API.
3. Let users create and manage a personal watchlist.
4. Allow users to rate movies they have watched.
5. Display detailed movie information when clicked.
6. Ensure the website works well across all devices (desktop, tablet, mobile).
7. Ensure the website is secure and user data is protected.
8. Implement quick searches based on movie genres.
### User Stories
1. As a new user, I want to create an account and log in to the website, so that I can access personalized features like managing my watchlist, rating movies, and saving my preferences.
2. As a movie enthusiast, I want to search for movies by title, so that I can find detailed information on movies I’m interested in quickly.
3. As a logged-in user, I want to add movies to my personal watchlist and manage them, so that I can keep track of the movies I plan to watch and easily access them later.
4. As a movie viewer, I want to rate movies I’ve watched, so that I can track my own opinions on movies and help others find movies based on ratings.
5. As a user, I want to click on a movie from the search results to view detailed information, so that I can learn more about the movie’s plot, director, cast, and ratings.
6. As a user, I want to access the website on any device (desktop, tablet, or mobile), so that I can enjoy the same seamless experience regardless of my device.
7. As a user, I want to trust that my personal data and login information are secure, so that I can feel safe while using the website and managing my movie preferences.

## Technologies Used
1. **HTML5** - The foundational markup language for structuring web content.
2. **CSS3** - Used for styling and layout, enhancing the visual appearance of the project.
3. **Bootstrap5** - Used for creating responsiveness across all screen sizes, pre-designed components and utility classes. More about Bootstrap on the [official Bootstrap website](https://getbootstrap.com/)
4. **JavaScript** - It is used to handle user interactions, manipulate the DOM, and manage application logic.
5. **Python3** - Used for the backend part of the application. More about Python3 on the [official website](https://www.python.org/)
6. **Jinja2** - A templating engine used with Flask to generate dynamic HTML pages from Python data. More about Jinja2 on the [official website](https://jinja.palletsprojects.com/en/stable/)
7. **Flask** - The core web framework used to build the application, handle routing, templates, and form submissions. More about Flask on the [official website](https://flask.palletsprojects.com/en/stable/)
8. **Werkzeug Security** - Used to securely hash and verify passwords. More about Werkzeug on the [official website](https://werkzeug.palletsprojects.com/en/stable/)
9. **Flask-Login** - Provides user authentication, login/logout management, and session tracking. More about Flask-Login on the [official website](https://flask-login.readthedocs.io/en/latest/)
10. **SQLAlchemy** - A Python ORM used to define models and interact with relational databases using Python code. More about SQLAlchemy on the [official website](https://www.sqlalchemy.org/)
11. **SQLite3** - Lightweight, file-based relational database used to store application data locally (accessed via SQLAlchemy in this project).
12. **os** - Provides access to environment variables and file paths, often used for configuration and security.
13. **secrets** - Used to generate secure random values, such as secret keys for session management.
14. **OMDb API** - A free RESTful web service used to fetch movie data such as titles, ratings, posters, and descriptions. More about this API on the [official documentation](https://www.omdbapi.com/)

## Credits
### Content
- [ChatGPT](https://chatgpt.com/) - Used to create content for:
  - `<meta>` keywords attribute
  - `<meta>` description attribute
### Media
- favicon: [Image Source](https://www.flaticon.com/free-icon/cinema-projector_1175511?term=cinema&page=1&position=58&origin=search&related_id=1175511)
- cine-data-login.jpg: [Image Source](https://unsplash.com/photos/the-walking-dead-dvd-movie-wMkaMXTJjlQ) - Photo by [Samuel Regan-Asante](https://unsplash.com/@reganography)
- cine-data-main.jpg: [Image Source](https://unsplash.com/photos/a-close-up-of-a-hand-with-a-light-on-it-rkaahInFlBg) - Photo by [Igor Bumba](https://unsplash.com/@igorbumba)
- movie.fallback.jpg: [Image Source](https://unsplash.com/photos/black-and-white-wall-mounted-calendar-k1V4pRaLjAU) - Photo by [Irham Setyaki](https://unsplash.com/@setyaki)
### Code
1. Code for all website's icons was created using [Font Awesome](https://fontawesome.com/start).
2. Code for importing Google Fonts inside the `static/assets/styles.css` file was created using [Google Fonts](https://fonts.google.com/).
3. Code for template inheritance was created using Jinja2 Template Inheritance System.
4. Code for register/login form was created using [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/#overview) and slightly modified to fit the project's needs.
5. Code for register/login tabs was created using [Bootstrap Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs) and slightly modified to fit the project's needs.
6. Code for register/login form validation messages was created using [Flask Flashing Messages](https://flask.palletsprojects.com/en/stable/patterns/flashing/) and [Jinja2 Conditional Statements](https://jinja.palletsprojects.com/en/stable/templates/)
7. Code for displaying the movie details modal was created using [Bootstrap Modals](https://getbootstrap.com/docs/5.3/components/modal/#how-it-works) and slightly modified to fit the project's needs.
8. Code for interactions feedback was created using [Bootstrap Toasts](https://getbootstrap.com/docs/5.3/components/toasts/#overview) and slightly modified to fit the project's needs.
9. Code for adding the correct CSS prefixes to ensure the cross-browser compatibility was created using [Autoprefixer CSS online](https://autoprefixer.github.io/).
### Inspirations
- [IMDb](https://www.imdb.com/) - For the colors.
