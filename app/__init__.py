from flask import Flask
from .routes import routes

def create_app():
    app = Flask(__name__)
    app.secret_key = 'super-secret-key'  # use from .env in production

    # Register route blueprint
    app.register_blueprint(routes)

    return app