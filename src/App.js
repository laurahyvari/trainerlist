import React from 'react';
import Customerlist from './components/Customerlist.js';
import Trainingslist from './components/Trainingslist';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';

import { Switch, Route } from 'react-router-dom';


function App() {

  /* const Routes = () => {
    return (
    
    ); */
 

  return (
    <div className="App">
 <AppBar position="static">
 </AppBar>
  <Toolbar> </Toolbar>
   <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Customerlist}></Route>
        <Route exact path='/trainings' component={Trainingslist}></Route>
      </Switch>
    
  
    </div>
  );
}

export default App;
