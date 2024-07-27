import logging
from app import create_app

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create an instance of the Flask application using the application factory
app = create_app()
