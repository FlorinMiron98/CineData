# CineData

![multiscreen-mockups](https://github.com/user-attachments/assets/429901dc-5e3d-48b0-b5dd-fa808a89efbc)


This is a web application inspired by IMDb, built to allow users to browse, search, and view detailed information about movies and TV shows. It features a dynamic user interface, a searchable movie database, and responsive design for an optimal experience across devices.

## Table of Contents
1. [UX](#ux)
   - [Project Goals](#project-goals)
   - [User Stories](#user-stories)
   - Design Choices
2. [Features](https://github.com/FlorinMiron98/CineData/blob/main/Features.md)
   - [Register/Login Page](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#registerlogin-page)
   - [Homepage](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#homepage)
     - [Search Movies Tab](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#search-movies-tab)
     - [Watchlist Tab](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#watchlist-tab)
     - [Ratings Tab](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#ratings-tab)
     - [Search Results Section](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#search-results-section)
     - [Movie Details Modal](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#movie-details-modal)
     - [Add/Change Rating Modal](https://github.com/FlorinMiron98/CineData/blob/main/Features.md#addchange-rating-modal)
3. [Technologies Used](#technologies-used)
4. [Data Schema](https://github.com/FlorinMiron98/CineData/blob/main/DataSchema.md)
   - [User](https://github.com/FlorinMiron98/CineData/blob/main/DataSchema.md#user)
   - [Watchlist Item](https://github.com/FlorinMiron98/CineData/blob/main/DataSchema.md#watchlist-item)
   - [Rating](https://github.com/FlorinMiron98/CineData/blob/main/DataSchema.md#rating)
   - [Relationships](https://github.com/FlorinMiron98/CineData/blob/main/DataSchema.md#relationships)
6. [Testing](https://github.com/FlorinMiron98/CineData/blob/main/Testing.md)
   - [Validator Testing](https://github.com/FlorinMiron98/CineData/blob/main/Testing.md#validator-testing)
   - [Performance, Accessibility and Best Practices Testing](https://github.com/FlorinMiron98/CineData/blob/main/Testing.md#performance-accessibility-and-best-practices-testing)
   - [Manual Testing](https://github.com/FlorinMiron98/CineData/blob/main/Testing.md#manual-testing)
   - [Bugs](https://github.com/FlorinMiron98/CineData/blob/main/Testing.md#bugs)
8. [Security](#security)
9. [Deployment](#deployment)
10. [Credits](#credits)
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

## Design Choices
### Architecture and Frameworks
- **Flask** - was chosen for its lightweight and flexible structure, which fits well with small-to-medium web applications and rapid development needs.
- **Jinja2** - a templating engine used to render dynamic HTML content from the backend, allowing tight integration with Flask routes and logic.
### Frontend Design
- **CSS with Bootstrap5** - used primarily for its utility classes and pre-built responsive components, helping achieve consistent styling quickly. Components such as tabs, forms, and toasts leverage Bootstrap to improve UX.
- **JavaScript** - JavaScript modules were used to modularize interaction logic and keep code maintainable.
### Database and ORM
- **SQLite3** - was used during development for its simplicity and zero-config setup, ideal for local testing and debugging.
- **PostgreSQL (via Heroku add-on)** - is used in production to support scalability, reliability, and better concurrency.
- **SQLAlchemy** - serves as the ORM layer to abstract away raw SQL queries and enforce a clean data model.
The app is structured to detect and adapt to different environments (development vs. production) — e.g., switching between SQLite and PostgreSQL automatically.

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

## Security
Security is a core consideration in the development of this project, particularly in how user credentials are handled.
To securely store user passwords, this project uses the `werkzeug.security` module from the **Werkzeug** library. This includes:
- **Hashing with Salt**: Passwords are hashed using a cryptographic hashing function with an automatically generated salt.
- **Salt Length**: A salt length of 8 bytes is used to ensure each password hash is unique, even if two users choose the same password.

## Deployment
This project was developed using **Python 3.12, Flask, and SQLAlchemy, with SQLite3** used as the database during local development for simplicity. However, since Heroku **does not support** SQLite3 in production, the application was configured to use **PostgreSQL** for deployment.

### Prerequisites
- A [Heroku](https://signup.heroku.com/) account
- [Git](https://git-scm.com/) installed
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed
- Your project structured and working locally

### Local Development Setup
- **Python Version**: 3.12
- **Web Framework**: Flask
- **Database (development)**: SQLite3
- **ORM**: SQLAlchemy
- **Template Engine**: Jinja2
- **Security**: Passwords hashed and salted using `werkzeug.security`

### Deployment Preparation
- Install dependencies
  ```
  pip install -r requirements.txt
  ```
- Create a `Procfile` in your project root
  ```
  web: gunicorn main:app
  ```
- Install Gunicorn (Heroku-compatible WSGI server):
  ```
  pip install gunicorn
  ```
- Specify Python Version in `.python-version`(3.12)
- Switch from SQLite to PostgreSQL for Production
  - In `settings.py` modify the app configuration to use PostgreSQL
    ```python
    DATABASE_URL = os.getenv('DATABASE_URL')
    if DATABASE_URL and DATABASE_URL.startswith('postgres://'):
        print(True)
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        SQLALCHEMY_DATABASE_URI = DATABASE_URL

    SQLALCHEMY_DATABASE_URI = DATABASE_URL or f"sqlite:///{os.path.join(os.getcwd(), 'instance', os.getenv('DATABASE_NAME', 'cinedata.db'))}"
    ```

### Heroku Deployment Steps
- Log in to Heroku CLI
  ```
  heroku login
  ```
- Create Heroku App
  ```
  heroku create cinedata-app
  ```
- Add Heroku PostgreSQL Add-on
  ```
  heroku addons:create heroku-postgresql:essential-0
  ```
- Push Code to Heroku
  ```
  git init
  git add .
  git commit -m "Deploy to Heroku"
  git push heroku main
  ```
- Initialize the PostgreSQL Database
  ```
  heroku run python
  >>> from main import db
  >>> db.create_all()
  >>> exit()
  ```
- Open Heroku App
  ```
  heroku open
  ```

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
