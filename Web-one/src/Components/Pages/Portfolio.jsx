import React,{useState} from 'react'
import { portfolio } from '../Data/dummuydata'

import Heading from '../Common/Heading'

const allCategory = ['all', ...new Set(portfolio.map((item)=>item.category))]

function Portfolio() {
    const [list,setList] = useState(portfolio)
    const [category,setCategory] = useState(allCategory)

    const filterItems = (category) =>{
            const newItems = portfolio.filter((itme)=> itme.category === category)
            setList(newItems)

            if (category == 'all'){
                setList(portfolio)
            }
    }
  return (
    <>
        <article>
            <div className='container'>
            <Heading title="Portfolio"/>
                <div className='catButton'data-aos="fade-down">
                    {category.map((category)=>(
                        <button className='primaryBtn' onClick={()=>filterItems(category)}>{category}</button>
                    ))}
                </div>
            </div>
            <div className='content grid3'>
                {list.map((items)=>(
                    <div className='box skill'data-aos="flip-left">
                        <div className='img'>
                            <img src={items.cover} alt=''/>
                        </div>
                        <div className='overlay'>
                            <h3>{items.name}</h3>
                            <span>{items.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    </>
  )
}

export default Portfolio
