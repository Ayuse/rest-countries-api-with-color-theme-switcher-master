import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import About from './pages/About';
import SingleCountry from './pages/SingleCountry';
import Error from './pages/Error';
import Home from './pages/Home';
// import components
import Navbar from './components/Navbar';
import Loading from './components/Loading';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/country/:name'>
            <SingleCountry />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
