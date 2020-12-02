import React from 'react';
import { useGlobalContext } from '../context';
// import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useGlobalContext();
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'nav-container dark' : 'nav-container'}`}>
      {/* <div className='nav-container'> */}
      <div>
        <p>
          <strong>Where in the world?</strong>
        </p>
      </div>
      <div>
        <button onClick={handleToggle}>Toggle Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
