import React from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from '../Common/Header';
import Home from '../Home/Home';

function Pages() {
  return (
    <>
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </Router>
    </>
  )
}

export default Pages
