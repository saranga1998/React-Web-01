import React from 'react'
import { about } from '../Data/dummuydata'
import Heading from '../Common/Heading';
import Pr from '../Data/Images/Profile.png'

function About() {
  return (
    <>
      <section className='about'>
            <div className='heroContanier'>
              {about.map((val,i)=>(
                <>
                  <div className='left' >
                    <img className='profile' src={Pr} alt='' data-aos="fade-down-right"></img>
                  </div>
                  <div className='right' key={i} data-aos="fade-left">
                    <Heading title='About me'/>
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <button >Download CV</button> 
                  </div>
                </>
              ))}
            </div>
      </section>
    </>
  )
}

export default About
