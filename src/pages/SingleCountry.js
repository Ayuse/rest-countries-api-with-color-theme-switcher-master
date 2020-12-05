import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleCountry = () => {
  const url = 'https://restcountries.eu/rest/v2/name/';
  const { name } = useParams();
  const { isDarkMode } = useGlobalContext();

  const [details, setdetails] = React.useState('');
  console.log(details);

  const detailedCountries = async () => {
    const data = await fetch(`${url}${name}`);
    const response = await data.json();
    setdetails(response);
  };
  React.useEffect(() => {
    detailedCountries();
  }, [name]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div>
        <button>
          <Link to={'/'}>Return</Link>
        </button>
        <h2>{name}</h2>
        {details.length > 0 &&
          details.map((country) => {
            const {
              name,
              population,
              flag,
              nativeName,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders,
            } = country;
            return (
              <article key={name} className='secondary-container'>
                <div>
                  <img src={flag} className='secondary-img' alt={name} />
                </div>
                <div>
                  <header>{name}</header>
                  <div className='text-container'>
                    <h1>
                      <strong>Native Name: </strong>
                      {nativeName}
                    </h1>
                    <h1>
                      <strong>Population: </strong>
                      {population}
                    </h1>
                    <h1>
                      <strong>Region: </strong>
                      {region}
                    </h1>
                    <h1>
                      <strong>Sub Region: </strong>
                      {subregion}
                    </h1>
                    <h1>
                      <strong>Capital: </strong>
                      {capital}
                    </h1>

                    <h1>
                      <strong>Top Level Domain: </strong>
                      {topLevelDomain}
                    </h1>
                    <h1>
                      <strong>Curriencies</strong>
                      {currencies.map((currency) => {
                        return <h1>{currency.name}</h1>;
                      })}
                    </h1>
                    <h1>
                      <strong>Languages</strong>
                      {languages.map((language) => (
                        <h1>{language.name}</h1>
                      ))}
                    </h1>
                  </div>
                  <h1 className='borders'>
                    <strong>Border Countries:</strong>
                    {borders.map((border) => (
                      <div>
                        <div>{border}</div>
                      </div>
                    ))}
                  </h1>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default SingleCountry;
