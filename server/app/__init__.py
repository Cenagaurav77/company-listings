from flask import Flask
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint
from app.middleware.error_handler import register_error_handlers

def create_app():
    app = Flask(__name__)

    # Enable Cross-Origin Resource Sharing (CORS) for the application
    CORS(app)
    
    register_error_handlers(app)
    
    # Import and register the company blueprint for route handling
    from app.routes.company_routes import company_bp
    app.register_blueprint(company_bp)

    # Swagger UI configuration
    SWAGGER_URL = '/swagger'
    API_URL = '/static/swagger.yaml'
    swaggerui_blueprint = get_swaggerui_blueprint(SWAGGER_URL, API_URL, config={'app_name': "Company Listings API"})
    app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

    return app
