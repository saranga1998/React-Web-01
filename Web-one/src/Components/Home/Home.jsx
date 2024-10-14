import React from 'react'
import Hero from './Hero'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Counter from '../Pages/Counter'
import Portfolio from '../Pages/Portfolio'

function Home() {
  return (
    <>
        <Hero/>
        <About/>
        <Services/>
        <Counter/>
        <Portfolio/>
    </>
  )
}

export default Home
