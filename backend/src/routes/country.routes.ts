import { Router } from 'express';
import { CountryController } from '../controllers/country.controller';

const router = Router();
const countryController = new CountryController();

export function setCountryRoutes(app: Router) {
    app.get('/api/countries', countryController.getAvailableCountries.bind(countryController));
    app.get('/api/countries/:name', countryController.getCountryInfo.bind(countryController));
}