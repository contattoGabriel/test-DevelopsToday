# Country Info App - Frontend

## Overview
The Country Info App is a full-stack application that provides information about countries, including available countries, detailed country data, and more. This frontend is built using Next.js and interacts with a backend API to fetch country-related data.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd country-info-app/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create an optimized production build, run:
```
npm run build
```
To start the production server, run:
```
npm start
```

## Folder Structure
- `pages/`: Contains the main entry points for the application.
- `components/`: Contains reusable components, such as `CountryInfo`.
- `styles/`: Contains global CSS styles.
- `public/`: Contains static assets.

## API Integration
The frontend communicates with the backend API to fetch country data. Ensure the backend is running to access the data.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.