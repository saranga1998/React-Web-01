import React,{useState} from 'react'
import { Link } from "react-router-dom";
import {navlink} from "../Data/dummuydata"
import { Menu } from '@mui/icons-material';

function Header() {

  const [responsive,setReponsive] = useState(false)
  return (
    <>
        <header>
            <div className='container flexsb'>
                <div className='logo'>
                  Sajitha Saranga
                </div>
                <div className={responsive? 'hideMenu':'nav'} >
                  {navlink.map((links,i)=>
                  (
                    <Link to ={links.url} key={i}>
                      {links.text}
                    </Link>
                  ))}
                </div>
                <button className='toggle' onClick={()=> setReponsive(!responsive)}>
                  <Menu className='icon'></Menu>
                </button>
            </div>
        </header>
    </>
  )
}

export default Header
