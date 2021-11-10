import React from 'react';
import Practice from './component/practice/practice'
import './App.css';
import Edit from './component/new/edit';
import Navbar from './component/navbar';
import Cards from './component/cards/cards';
import Update from './component/update';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
	<div className="App">
    
    <BrowserRouter>
       <>
         
      <Switch>
        <Route  exact path={'/'} component={Cards}>
		   <Navbar />
		   <Cards />
		</Route>
        <Route  path={'/cards'} component={Cards}>
		   <Navbar />
		   <Cards />
		</Route>
	      <Route  path={'/edit'} component={Edit}>
		  <Navbar />
		   <Edit />
		  </Route>
	      <Route  path={'/practice'} component={Practice}>
		    <Navbar />
		    <Practice />
		  </Route>
        <Route  path={'/update/:id'} component={Update}>
		   <Navbar />
		   <Update />
		</Route>
      </Switch>
       </>
     </BrowserRouter>
    </div>
  );
}

export default App;
