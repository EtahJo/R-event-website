import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Details from './Details';
import NewEvent from './NewEvent';
import Thanks from './Thanks';


function App() {
  

  return (
    <Router>
      <div className="App">
    <Header/>
    <div className="content">
    
      <Switch>
        
        <Route exact path="/">
        <Home/>
        </Route>

        <Route path="/details/:id">
        <Details/>
        </Route>

        <Route path="/new-event">
        <NewEvent/>
        </Route>
        <Route path="/thanks">
        <Thanks/>
        </Route>
        
        
      </Switch>
      </div>
      </div>
    </Router>
   

  );
}

export default App;
