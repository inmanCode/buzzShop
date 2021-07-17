import React from 'react';
import './App.css';
//pages
import LandingPage from './pages/LandingPage';
import DesignPage from './pages/DesignPage';
//react router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/Design'>
            <DesignPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
