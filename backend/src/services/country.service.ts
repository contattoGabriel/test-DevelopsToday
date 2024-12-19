export class CountryService {
    private apiUrl: string = 'https://date.nager.at/api/v2';

    async fetchAvailableCountries(): Promise<any> {
        const response = await fetch(`${this.apiUrl}/countries`);
        if (!response.ok) {
            throw new Error('Failed to fetch available countries');
        }
        return await response.json();
    }

    async fetchCountryInfo(countryCode: string): Promise<any> {
        const response = await fetch(`${this.apiUrl}/country/${countryCode}`);
        if (!response.ok) {
            throw new Error('Failed to fetch country info');
        }
        return await response.json();
    }
}