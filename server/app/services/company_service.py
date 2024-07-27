from app.models.data_model import companies_df, locations_df

def get_all_companies():
    return companies_df.to_dict(orient='records')

def get_company(company_id):
    company = companies_df[companies_df['company_id'] == company_id]
    if company.empty:
        return None
    return company.to_dict(orient='records')[0]

def get_company_locations(company_id):
    locations = locations_df[locations_df['company_id'] == company_id]
    if locations.empty:
        return []
    return locations.to_dict(orient='records')
