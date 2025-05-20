from flask import Flask, render_template, request, url_for, redirect, flash, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user
from flask_bootstrap import Bootstrap5
import secrets

secret_key = secrets.token_urlsafe(32)

app = Flask(__name__)
bootstrap = Bootstrap5(app)
app.config['SECRET_KEY'] = secret_key

class Base(DeclarativeBase):
    pass

app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///cinedata.db'
db = SQLAlchemy(model_class=Base)
# login_manager = LoginManager(app)
db.init_app(app)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)