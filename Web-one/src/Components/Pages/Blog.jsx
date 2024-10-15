import React from 'react'
import Heading from '../Common/Heading'
import { blog } from '../Data/dummuydata'
import Bl from '../Data/Images/blog/b1.png'

export default function Blog() {
    return (
        <>
            <section className='blog'>
                <div className='container'>
                    <Heading title="Blog" />
                    <div className='content grid3'>
                        {blog.map((item) => {
                            return (
                                <div className='box'>
                                    <div className='img'>
                                        <img src={Bl}/>
                                    </div>
                                    <div className='text'>{item.title}
                                        <label>
                                            By {item.author} {item.date}
                                        </label>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>
    )
}