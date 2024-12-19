import React from 'react';

interface CountryInfoProps {
    name: string;
    flagUrl: string;
    borders: string[];
    population: number;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ name, flagUrl, borders, population }) => {
    return (
        <div className="country-info">
            <h1>{name}</h1>
            <img src={flagUrl} alt={`Flag of ${name}`} />
            <p>Population: {population.toLocaleString()}</p>
            <h2>Border Countries:</h2>
            <ul>
                {borders.length > 0 ? (
                    borders.map((border, index) => <li key={index}>{border}</li>)
                ) : (
                    <li>No border countries</li>
                )}
            </ul>
        </div>
    );
};

export default CountryInfo;