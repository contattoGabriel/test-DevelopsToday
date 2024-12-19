# Country Info App

## Overview
The Country Info App is a full-stack application that provides information about countries, including available countries, detailed country data, borders, population, and flags. The application is built using Node.js for the backend and React with Next.js for the frontend.

## Project Structure
```
country-info-app
├── backend                # Backend application
│   ├── src
│   │   ├── controllers    # Contains controllers for handling requests
│   │   ├── services       # Contains services for business logic
│   │   ├── models         # Contains data models
│   │   ├── routes         # Contains route definitions
│   │   └── app.ts         # Entry point for the backend application
│   ├── package.json       # Backend dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration for the backend
│   └── README.md          # Documentation for the backend
├── frontend               # Frontend application
│   ├── pages              # Contains Next.js pages
│   ├── components         # Contains React components
│   ├── styles             # Contains global styles
│   ├── public             # Static assets
│   ├── package.json       # Frontend dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration for the frontend
│   └── README.md          # Documentation for the frontend
├── .env                   # Environment variables
└── README.md              # Overview of the entire project
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd country-info-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

#### Backend
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Start the backend server:
   ```
   npm run start
   ```

#### Frontend
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Start the frontend application:
   ```
   npm run dev
   ```

### API Endpoints
- `GET /api/countries` - Fetches the list of available countries.
- `GET /api/countries/:countryName` - Fetches detailed information about a specific country.

## Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables, such as API keys and base URLs.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.