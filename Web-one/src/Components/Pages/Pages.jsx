import React from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Header from '../Common/Header';
import Home from '../Home/Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Footer from '../Common/Footer';

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
            {/* <Route exact path='/blog' component={Blog}/> */}
            <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
    </Router>
    </>
  )
}

export default Pages
