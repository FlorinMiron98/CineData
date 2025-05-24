from flask import Flask, render_template, request, url_for, redirect, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user
from flask_bootstrap import Bootstrap5
import secrets
import os

secret_key = secrets.token_urlsafe(32)

app = Flask(__name__, instance_relative_config=True)
app.config['SECRET_KEY'] = secret_key
bootstrap = Bootstrap5(app)

class Base(DeclarativeBase):
    pass

app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///' + os.path.join(app.instance_path, 'cinedata.db')
db = SQLAlchemy(model_class=Base)
db.init_app(app)

# Configure Flask-Login's Login Manager
login_manager = LoginManager(app)
login_manager.init_app(app)

# User loader callback
@login_manager.user_loader
def load_user(user_id):
    return db.get_or_404(User, user_id)

# Create Table in Database
class User(UserMixin, db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True)
    password: Mapped[str] = mapped_column(String(100)) 

with app.app_context():
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def home():
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

@app.route('/search')
@login_required
def search():
    return render_template('search.html', user=current_user.username)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)