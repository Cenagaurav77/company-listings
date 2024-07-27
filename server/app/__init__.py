from flask import Flask
from flask_cors import CORS
from app.middleware.error_handler import register_error_handlers

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    register_error_handlers(app)
    
    from app.routes.company_routes import company_bp
    app.register_blueprint(company_bp)
    
    return app
