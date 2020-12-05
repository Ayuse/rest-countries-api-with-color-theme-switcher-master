import React, { useEffect } from 'react';
// import Country from './Country';
// import Loading from './Loading';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const CountryList = ({ name, population, capital, region, flag }) => {
  const { isDarkMode, searchInput, setCountries } = useGlobalContext();
  return (
    <div>
      <div
        className={`${isDarkMode ? 'single-country dark' : 'single-country'}`}
      >
        <Link to={`/country/${name}`}>
          <picture>
            <img src={flag} alt='' className='main-img' />
          </picture>
          <div className='info'>
            <h3>{name}</h3>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CountryList;
