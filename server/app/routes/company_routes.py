from flask import Blueprint
from app.controllers.company_controller import get_companies, get_company_by_id, get_locations_by_company_id

company_bp = Blueprint('company', __name__)

company_bp.route('/companies', methods=['GET'])(get_companies)
company_bp.route('/companies/<int:company_id>', methods=['GET'])(get_company_by_id)
company_bp.route('/companies/<int:company_id>/locations', methods=['GET'])(get_locations_by_company_id)
