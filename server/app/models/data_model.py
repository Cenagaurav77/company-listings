import pandas as pd
from app.utils.csv_loader import load_csv

companies_df = load_csv('companies.csv')
locations_df = load_csv('locations.csv')
