import os
from dotenv import load_dotenv

# Load the .env data
load_dotenv()

# Configuration Class
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'fallback-secret')

    DATABASE_URL = os.getenv('DATABASE_URL')
    if DATABASE_URL:
        if DATABASE_URL.startswith('postgres://'):
            DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        SQLALCHEMY_DATABASE_URI = DATABASE_URL
    else: 
        instance_path = os.path.join(os.getcwd(), 'instance')
        db_name = os.getenv('DATABASE_NAME', 'cinedata.db')

        SQLALCHEMY_DATABASE_URI = f'sqlite:///{os.path.join(instance_path, db_name)}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

