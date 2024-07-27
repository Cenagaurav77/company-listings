from flask import Flask
from flask_cors import CORS
from app.middleware.error_handler import register_error_handlers

def create_app():
    app = Flask(__name__)

    # Enable Cross-Origin Resource Sharing (CORS) for the application
    CORS(app)
    
    register_error_handlers(app)
    
    # Import and register the company blueprint for route handling
    from app.routes.company_routes import company_bp
    app.register_blueprint(company_bp)

    return app
