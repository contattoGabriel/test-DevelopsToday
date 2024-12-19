# Country Info App - Backend

## Overview
The Country Info App is a full-stack application that provides information about countries, including available countries, detailed country information, borders, population data, and flags. The backend is built using Node.js with Express.js.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd country-info-app/backend
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root of the backend directory and add any necessary environment variables. For example:
   ```
   API_BASE_URL=https://date.nager.at/api/v2
   ```

4. **Run the Server**
   To start the backend server, use:
   ```bash
   npm start
   ```

## API Endpoints

### Get Available Countries
- **Endpoint:** `GET /api/countries`
- **Description:** Fetches a list of available countries from the Date Nager API.

### Get Country Info
- **Endpoint:** `GET /api/countries/:countryName`
- **Description:** Retrieves detailed information about a specific country, including borders, population, and flag URL.

## Code Structure
- **src/app.ts:** Entry point of the application, initializes the server and middleware.
- **src/controllers/country.controller.ts:** Contains the logic for handling country-related requests.
- **src/services/country.service.ts:** Interacts with the Date Nager API to fetch country data.
- **src/models/country.model.ts:** Defines the structure of country data.
- **src/routes/country.routes.ts:** Sets up the API routes for country-related endpoints.

## Testing
To run tests, use:
```bash
npm test
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.