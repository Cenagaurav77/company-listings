from flask import jsonify, request, abort
from app.services.company_service import get_all_companies, get_company, get_company_locations

def get_companies():
    try:
        companies = get_all_companies()
        return jsonify(companies)
    except Exception as e:
        abort(500, description="Internal Server Error")

def get_company_by_id(company_id):
    try:
        company = get_company(company_id)
        if company is None:
            abort(404, description="Company not found")
        return jsonify(company)
    except Exception as e:
        abort(500, description="Internal Server Error")

def get_locations_by_company_id(company_id):
    try:
        locations = get_company_locations(company_id)
        if not locations:
            abort(404, description="Locations not found for the specified company")
        return jsonify(locations)
    except Exception as e:
        abort(500, description="Internal Server Error")
