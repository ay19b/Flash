import React from 'react';
import Practice from './component/practice/practice'
import './App.css';
import Edit from './component/new/edit';
import Navbar from './component/header/navbar';
import Cards from './component/cards/cards';
import Update from './component/new/update';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
	<div className="App">

    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <>
         
      <Switch>
	      <Route  exact path={'/'} ><Navbar /><Cards /></Route>
          <Route  path={'/cards'} component={Cards}><Navbar /><Cards /></Route>
		  <Route  path={'/edit'} component={Edit}><Navbar /><Edit /></Route>
	      <Route  path={'/practice'} component={Practice}><Navbar /><Practice /></Route>
          <Route  path={'/update/:id'} component={Update}><Navbar /><Update /></Route>
		  <Route  path={'/:Id'} component={Cards}><Navbar /><Cards /></Route>
      </Switch>
       </>
     </BrowserRouter>
    </div>
  );
}

export default App;
