import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Switch, Route} from 'react-router-dom'
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';


function App() {
 
 
  return (
    <div className="App" >
      <Header />
      <Switch>
       <Route path="/" exact>
        <Home />
       </Route>
       <Route path='/destination' exact>
        <Destination />
       </Route>
       <Route path="/crew" exact>
      <Crew />
       </Route>
       <Route path="/technology" exact>
       <Technology />
       </Route>
      </Switch>
    
    </div>
  );
}

export default App;
