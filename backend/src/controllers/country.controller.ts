import { Request, Response } from 'express';
import { CountryService } from '../services/country.service';

export class CountryController {
    private countryService: CountryService;

    constructor() {
        this.countryService = new CountryService();
    }

    public async getAvailableCountries(req: Request, res: Response): Promise<void> {
        try {
            const countries = await this.countryService.fetchAvailableCountries();
            res.status(200).json(countries);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching countries', error });
        }
    }

    public async getCountryInfo(req: Request, res: Response): Promise<void> {
        const { countryName } = req.params;
        try {
            const countryInfo = await this.countryService.fetchCountryInfo(countryName);
            res.status(200).json(countryInfo);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching country info', error });
        }
    }
}