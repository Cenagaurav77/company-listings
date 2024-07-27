# Company Listings Application

This web application provides an intuitive and user-friendly interface for viewing a comprehensive list of companies and their respective locations. Users can browse through various companies, view detailed information about each company, and explore the exact locations on an interactive map. The application is designed to be fully responsive, ensuring a seamless experience on both desktop and mobile devices. The frontend is built with React and styled using Tailwind CSS, while the backend is powered by Flask. Docker is used to containerize the application, making it easy to deploy and manage.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Additional Notes](#additional-notes)
- [License](#license)

## Features

- View a list of companies and their details.
- View locations for each company on an interactive map.
- Search for companies by name.
- Responsive design for both desktop and mobile views.

## Technologies Used

- React
- Tailwind CSS
- Axios
- Flask (Backend)
- Docker

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python](https://www.python.org/) (v3.9 or higher)
- [Docker](https://www.docker.com/)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/company-listings.git
    cd company-listings
    ```

2. **Install dependencies for the frontend:**

    ```sh
    cd client
    npm install
    ```

3. **Install dependencies for the backend:**

    ```sh
    cd ../server
    pip install -r requirements.txt

    (if facing any error, while installing the dependencies. Create a virtual python environment, using below command to support the installation of the dependencies)
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

## Running the Application

### Using Docker Compose

1. **Build and run the containers:**

    ```sh
    docker-compose up --build
    ```

2. **Access the application:**

    - Frontend: `http://localhost:3000`
    - Backend: `http://localhost:5000`

### Running Locally

#### Running the Backend

1. **Navigate to the server directory:**

    ```sh
    cd server
    ```
    
2. **Run the Flask application:**

    ```sh
    (Only, if you are using virtual python environment)
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`

    (direct run)
    python main.py
    ```

#### Running the Frontend

1. **Navigate to the client directory:**

    ```sh
    cd client
    ```

2. **Start the React application:**

    ```sh
    npm start
    ```

3. **Access the application:**

    - Frontend: `http://localhost:3000`
    - Backend: `http://localhost:5000`

## API Documentation

The API serves company and location data. Below are the available endpoints:

### 1. Get All Companies

- **Endpoint**: `/companies`
- **Method**: `GET`
- **Description**: Retrieves a list of all companies.
- **Response**: A JSON array of company objects.

### 2. Get Company Details by ID

- **Endpoint**: `/companies/{company_id}`
- **Method**: `GET`
- **Description**: Retrieves details for a specific company by its ID.
- **Response**: A JSON object with the company details.

### 3. Get Locations for a Company

- **Endpoint**: `/companies/{company_id}/locations`
- **Method**: `GET`
- **Description**: Retrieves a list of all locations for a specific company.
- **Response**: A JSON array of location objects.

### Error Responses:

For all endpoints, the following error responses may be returned:

**404 Not Found**: The requested resource was not found.
**500 Internal Server Error**: An internal server error occurred.

## Additional Notes

- Ensure the backend server is running before starting the frontend application to avoid API call issues.
- The application uses Leaflet for map rendering and Tailwind CSS for responsive design.
