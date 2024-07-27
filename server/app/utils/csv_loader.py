import pandas as pd

def load_csv(file_name):
    try:
        return pd.read_csv(f'data/{file_name}')
    except Exception as e:
        raise Exception(f"Error loading CSV file {file_name}: {e}")
