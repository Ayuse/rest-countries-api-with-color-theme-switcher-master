import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const SingleCountry = () => {
  const url = 'https://restcountries.eu/rest/v2/name/';
  const { name } = useParams();

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
            <article key={name}>
              <img src={flag} />

              <header>{name}</header>
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
                {/* {currencies} */}
              </h1>
              <h1>
                <strong>Languages</strong>
                {/* {languages} */}
              </h1>
              <h1>
                <strong>Border Countries</strong>
                {/* {borders} */}
              </h1>
            </article>
          );
        })}
    </div>
  );
};

export default SingleCountry;
