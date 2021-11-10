import React from 'react';
import Practice from './component/practice/practice'
import './App.css';
import Edit from './component/new/edit';
import Navbar from './component/navbar';
import Cards from './component/cards/cards';
import Update from './component/update';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './component/home';
function App() {
  return (
	<div className="App">
    <BrowserRouter>
       <>
       <Navbar />
      <Switch>
        <Route  exact path={'/'} component={Home}></Route>
        <Route  path={'/cards'} component={Cards}></Route>
	      <Route  path={'/edit'} component={Edit}></Route>
	      <Route  path={'/practice'} component={Practice}></Route>
        <Route  path={'/update/:id'} component={Update}></Route>
      </Switch>
       </>
     </BrowserRouter>
    </div>
  );
}

export default App;
