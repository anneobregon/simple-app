import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Landingpage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setLoggedIn(true);
  }


  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => (
            <Landingpage loggedInStatus={isLoggedIn} />
          )}
        />
        <Route exact path="/home" component={Homepage} loggedInStatus={isLoggedIn}/>
        <Route 
          exact 
          path="/login" 
          render={() => (
            <Login handleLogin={handleLogin} loggedInStatus={isLoggedIn} />
          )}
        />
        <Route 
          exact 
          path="/register" 
          render={() => (
            <Register loggedInStatus={isLoggedIn} />
          )}
        />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
