import React from 'react'
import { home,about } from "../Data/dummuydata"
import Typewriter from 'typewriter-effect'



function Hero() {
    return (
        <>
            <section className='hero'>
                {
                    home.map((val, i) => (
                        <div className='heroContent' key={i}>
                            <h3 data-aos="fade-right">{val.text}</h3>
                            <h1>
                                <Typewriter
                                    options={{
                                        strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                            <p data-aos="fade-right">{val.desc}</p>
                            
                            <button className='primaryBtn' data-aos="fade-up-right">Download CV</button>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Hero
