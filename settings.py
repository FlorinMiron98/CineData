import os
from dotenv import load_dotenv

# Load the .env data
load_dotenv()

# Configuration Class
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'fallback-secret')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    DATABASE_URL = os.getenv('DATABASE_URL')
    if DATABASE_URL and DATABASE_URL.startswith('postgres://'):
        print(True)
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        SQLALCHEMY_DATABASE_URI = DATABASE_URL

    SQLALCHEMY_DATABASE_URI = DATABASE_URL or f"sqlite:///{os.path.join(os.getcwd(), 'instance', os.getenv('DATABASE_NAME', 'cinedata.db'))}"

