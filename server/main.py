from flask import Flask, jsonify, request, abort
import pandas as pd
import logging
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


try:
    companies_df = pd.read_csv('companies.csv')
    locations_df = pd.read_csv('locations.csv')
except Exception as e:
    logger.error(f"Error loading CSV files: {e}")
    abort(500, description="Internal Server Error")


@app.route('/companies', methods=['GET'])
def get_companies():
    try:
        companies = companies_df.to_dict(orient='records')
        return jsonify(companies)
    except Exception as e:
        logger.error(f"Error getting companies: {e}")
        abort(500, description="Internal Server Error")

@app.route('/companies/<int:company_id>', methods=['GET'])
def get_company_by_id(company_id):
    try:
        company = companies_df[companies_df['company_id'] == company_id]
        if company.empty:
            abort(404, description="Company not found")
        return jsonify(company.to_dict(orient='records')[0])
    except Exception as e:
        logger.error(f"Error getting company by ID: {e}")
        abort(500, description="Internal Server Error")


@app.route('/companies/<int:company_id>/locations', methods=['GET'])
def get_locations_by_company_id(company_id):
    try:
        locations = locations_df[locations_df['company_id'] == company_id]
        if locations.empty:
            abort(404, description="Locations not found for the specified company")
        return jsonify(locations.to_dict(orient='records'))
    except Exception as e:
        logger.error(f"Error getting locations by company ID: {e}")
        abort(500, description="Internal Server Error")


@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": str(error)}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": str(error)}), 500

if __name__ == '__main__':
    app.run(debug=True)































# from flask import Flask, jsonify, request, abort
# import csv

# app = Flask(__name__)

# def read_csv(file_name):
#     with open(file_name, mode='r') as file:
#         reader = csv.DictReader(file)
#         return list(reader)

# companies = read_csv('companies.csv')
# locations = read_csv('locations.csv')

# @app.route('/companies', methods=['GET'])
# def get_companies():
#     return jsonify(companies)

# @app.route('/companies/<int:company_id>', methods=['GET'])
# def get_company_by_id(company_id):
#     company = next((company for company in companies if int(company['company_id']) == company_id), None)
#     if company is None:
#         abort(404, description="Company not found")
#     return jsonify(company)

# @app.route('/companies/<int:company_id>/locations', methods=['GET'])
# def get_locations_by_company_id(company_id):
#     company_locations = [location for location in locations if int(location['company_id']) == company_id]
#     if not company_locations:
#         abort(404, description="Locations not found for the given company ID")
#     return jsonify(company_locations)

# if __name__ == '__main__':
#     app.run(debug=True)
