import React from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from '../Common/Header';
import Home from '../Home/Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';

function Pages() {
  return (
    <>
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/testimonials' component={Testimonials}/>
        </Switch>
    </Router>
    </>
  )
}

export default Pages
