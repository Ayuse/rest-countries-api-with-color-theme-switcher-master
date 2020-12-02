import React, { useState, useContext, useEffect, useRef } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();
const url = 'https://restcountries.eu/rest/v2/all';
const searchUrl = 'https://restcountries.eu/rest/v2/name/';
const regionUrl = 'https://restcountries.eu/rest/v2/region/';

const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [original, setOriginal] = useState('');
  const [searchTerm, setSearchTerm] = useState('a');
  const [regionInput, setRegionInput] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchInput = useRef(null);

  const fetchCountries = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setCountries(response);
    setOriginal(response);
  };

  useEffect(() => {
    const searchCountries = async () => {
      if (searchTerm !== '') {
        const data = await fetch(`${searchUrl}${searchTerm}`);
        const response = await data.json();
        setCountries(response);
      } else {
        const data = await fetch(url);
        const response = await data.json();
        setCountries(response);
      }
    };
    searchCountries();
  }, [searchTerm]);

  useEffect(() => {
    const regionFilter = async () => {
      if (regionInput === '' || regionInput === null) {
        const data = await fetch(url);
        const response = await data.json();
        setCountries(response);
      } else if (regionInput !== '') {
        const data = await fetch(`${regionUrl}${regionInput}`);
        const response = await data.json();
        setCountries(response);
      }
    };
    regionFilter();
  }, [regionInput]);

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        setCountries,
        countries,
        isDarkMode,
        setIsDarkMode,
        searchInput,
        setSearchTerm,
        // setSearchInput,
        regionInput,
        setRegionInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
