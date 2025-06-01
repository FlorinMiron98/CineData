from flask import Flask, render_template, request, url_for, redirect, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, Float, ForeignKey
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user
from settings import Config
import requests
import secrets
import os
import urllib.parse

# Initialize the Flask application and set the secret key
app = Flask(__name__, instance_relative_config=True)
app.config.from_object(Config)

class Base(DeclarativeBase):
    pass

# Configure the SQLite database and initialize SQLAlchemy with the Flask application
db = SQLAlchemy(model_class=Base)
db.init_app(app)

# Configure Flask-Login's Login Manager
login_manager = LoginManager(app)
login_manager.init_app(app)

# User loader callback
@login_manager.user_loader
def load_user(user_id):
    return db.get_or_404(User, user_id)

# Create User Table in Database
class User(UserMixin, db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True)
    password: Mapped[str] = mapped_column(String)

    watchlist: Mapped[list['WatchlistItem']] = relationship('WatchlistItem', backref='user', cascade='all, delete-orphan')
    ratings: Mapped[list['Rating']] = relationship('Rating', backref='user', cascade='all, delete-orphan')

# Create the Watchlist Table in Database
class WatchlistItem(db.Model):
    movie_id: Mapped[str] = mapped_column(String, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    release_date: Mapped[str] = mapped_column(String)
    rating: Mapped[float] = mapped_column(Float)
    poster_url: Mapped[str] = mapped_column(String)

    user_id: Mapped[int] = mapped_column(Integer, ForeignKey('user.id'), nullable=False)

# Create the Ratings Table in Database
class Rating(db.Model):
    movie_id: Mapped[str] = mapped_column(String, primary_key=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    release_date: Mapped[str] = mapped_column(String)
    user_rating: Mapped[int] = mapped_column(Integer, nullable=False)
    poster_url: Mapped[str] = mapped_column(String)

    user_id: Mapped[int] = mapped_column(Integer, ForeignKey('user.id'), nullable=False)

# Create the database
with app.app_context():
    db.create_all()

# Home Route
@app.route('/', methods=['GET', 'POST'])
def home():
    """
    Handle both user login and registration on the home page.
    Supports POST requests with two form types: 'login' and 'register'.
    """
    if request.method == 'POST':
        form_type = request.form.get('form-type')

        username = request.form.get('username')
        password = request.form.get('password')

        if form_type == 'login':
            result = db.session.execute(db.select(User).where(User.username == username))
            user = result.scalar()
            if not user:
                flash('Invalid username', 'login')
            elif not check_password_hash(user.password, password):
                flash('Password incorrect, please try again', 'login')
            else:
                login_user(user)

                return redirect(url_for('search'))
        
        elif form_type == 'register':
            confirm_password = request.form.get('confirm-password')
            if password != confirm_password:
                flash('Passwords do not match', 'register')
            elif User.query.filter_by(username=username).first():
                flash('Username already exists', 'register')
            else:
                password_hashed = generate_password_hash(password, method='scrypt', salt_length=8)
                new_user = User(username=username, password=password_hashed)
                db.session.add(new_user)
                db.session.commit()

                login_user(new_user)

                return redirect(url_for('search'))

    return render_template('index.html')

# Search Page Route
@app.route('/search')
@login_required
def search():
    """
    Render the search page, passing the current user's username to the template.
    """
    return render_template('search.html', user=current_user.username)

# Search Movies Route
@app.route('/api/search_movies')
def search_movies():
    """
    Search movies using the OMDb API based on a query parameter.
    Expects a 'q' parameter with the search term. 
    Returns JSON results from OMDb or an error message if the query is missing.
    """
    query = request.args.get('q')
    api_key = os.getenv('OMDB_API_KEY')

    if not query:
        return jsonify({'error': 'Missing search query'}), 400

    omdb_url = f"http://www.omdbapi.com/?apikey={api_key}&s={query}"
    response = requests.get(omdb_url)
    data = response.json()

    return jsonify(data)

# Fetch Movie Data Route
@app.route('/api/movie_details')
def movie_details():
    """
    Retrieves detailed information for a specific movie from the OMDb API.
    Extracts the 'id' query parameter from the request, uses the OMDb API key
    from environment variables to fetch movie details by IMDb ID, and returns
    the JSON response to the client.
    """
    query = request.args.get('id')
    api_key = os.getenv('OMDB_API_KEY')

    if not query:
        return jsonify({'error': 'Missing movei id'}), 400

    omdb_movie_details_url = f'http://www.omdbapi.com/?apikey=${api_key}&i={query}'
    response = requests.get(omdb_movie_details_url)
    data = response.json()

    return jsonify(data)

# Create the table for a single movie in the database
@app.route('/add_to_watchlist', methods=['GET','POST'])
@login_required
def add_to_watchlist():
    """
    Add a movie to the current user's watchlist.
    Creates a new WatchlistItem associated with the logged-in user,
    saves it to the database, and returns a JSON confirmation message.
    """
    data = request.get_json()
    movie = WatchlistItem(
        user_id=current_user.id,
        title=data['title'],
        release_date=data['release_date'],
        rating=data['rating'],
        poster_url=data['poster_url'],
        movie_id=data['movie_id']
    )
    db.session.add(movie)
    db.session.commit()
    return jsonify({'message': 'Movie added to your list'})

@app.route('/watchlist')
@login_required
def watchlist():
    """
    Retrieve the current user's watchlist as a JSON response.
    Queries the database for all WatchlistItem entries associated with the logged-in user,
    and returns a list of movies with their title, release date, rating, poster URL, and movie ID.
    """
    watchlist = WatchlistItem.query.filter_by(user_id=current_user.id).all()
    return jsonify([{
        'Title': movie.title,
        'Released': movie.release_date,
        'imdbRating': movie.rating,
        'Poster': movie.poster_url,
        'imdbID': movie.movie_id
    } for movie in watchlist])

@app.route('/delete_from_watchlist/<string:movie_id>', methods=['DELETE'])
@login_required
def delete_from_watchlist(movie_id):
    """
    Delete a movie from the current user's watchlist by movie ID.
    Retrieves the WatchlistItem by ID, returns 404 if not found.
    Checks if the movie belongs to the logged-in user to prevent unauthorized deletions.
    If authorized, deletes the movie from the database and commits the change.
    """
    movie = WatchlistItem.query.get_or_404(movie_id)
    if movie.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403
    
    db.session.delete(movie)
    db.session.commit()
    return jsonify({'message': 'Movie removed from watchlist'})

@app.route('/add_to_rating', methods=['GET','POST'])
@login_required
def add_to_rating():
    """
    Add a user rating for a movie.
    Creates a new Rating entry linked to the current user,
    saves it to the database, and returns a confirmation message as JSON.
    """
    data = request.get_json()
    movie = Rating(
        user_id=current_user.id,
        title=data['title'],
        release_date=data['release_date'],
        poster_url=data['poster_url'],
        movie_id=data['movie_id'],
        user_rating=data['user_rating']
    )
    db.session.add(movie)
    db.session.commit()
    return jsonify({'message': 'Movie added to your ratings'})

@app.route('/ratings')
@login_required
def ratings():
    """
    Retrieve all movies rated by the current user.
    Queries the database for all Rating entries associated with the logged-in user.
    Returns a list of rated movies in JSON format
    """
    ratings = Rating.query.filter_by(user_id=current_user.id).all()
    return jsonify([{
        'Title': movie.title,
        'Released': movie.release_date,
        'Poster': movie.poster_url,
        'imdbID': movie.movie_id,
        'userRating': movie.user_rating
    } for movie in ratings])

@app.route('/update_rating', methods=['PUT'])
@login_required
def update_rating():
    """
    Update the user's rating for a specific movie.
    Looks up the movie rating for the current user by title.
    If found, updates the user's rating and commits the change to the database.
    If not found, returns a message indicating that the rating doesn't exist.
    """
    data = request.get_json()
    title = data['title']
    new_rating = data['rating']

    rating = Rating.query.filter_by(user_id=current_user.id, title=title).first()

    if not rating:
        return jsonify({'message': 'Rating not found'})

    rating.user_rating = new_rating
    db.session.commit()
    return jsonify({'message': 'Rating updated successfully'})

@app.route('/logout')
def logout():
    """
    Log out the current user and redirect to the home page.
    Calls Flask-Login's logout_user() to end the user session.
    """
    logout_user()
    return redirect(url_for('home'))