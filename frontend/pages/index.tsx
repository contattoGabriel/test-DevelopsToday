import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('/api/countries');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Country Info App</h1>
      <h2>Available Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <Link href={`/country/${country.name}`}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;