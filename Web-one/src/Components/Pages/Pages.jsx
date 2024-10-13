import React from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from '../Common/Header';
import Home from '../Home/Home';
import About from './About';

function Pages() {
  return (
    <>
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
        </Switch>
    </Router>
    </>
  )
}

export default Pages
