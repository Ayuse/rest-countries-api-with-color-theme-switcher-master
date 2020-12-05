import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import CountryList from '../components/CountryList';
import Loading from '../components/Loading';

import Flag from '../images/Flag.jpg';
const Home = () => {
  const {
    isDarkMode,
    countries,
    searchInput,
    setSearchTerm,
    regionInput,
    setRegionInput,
    // setSearchInput,
  } = useGlobalContext();

  console.log(regionInput);
  return (
    <div className={`${isDarkMode ? 'hero-container dark' : 'hero-container'}`}>
      <div className='hero-top'>
        <div>
          <span>searchbtn</span>
          <input
            ref={searchInput}
            className='input'
            type='search'
            placeholder='Search for a country...'
            name=''
            // value={searchInput}
            onChange={() => setSearchTerm(searchInput.current.value)}
          />
        </div>

        <select
          className={`${isDarkMode ? 'select dark' : 'select'}`}
          name=''
          placeholder='Filter by Region'
          onChange={(e) => setRegionInput(e.target.value)}
        >
          <option value=''>Filter by Region</option>
          <option value='africa'>Africa</option>
          <option value='americas'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>

      {countries?.length > 0 ? (
        <div className='country-container'>
          {countries.map((country, index) => {
            return <CountryList key={index} {...country} />;
          })}
        </div>
      ) : (
        <div className='country-container'>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Home;
