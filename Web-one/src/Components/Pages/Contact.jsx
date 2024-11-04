import React from 'react'
import Heading from '../Common/Heading'
import { contact } from '../Data/dummuydata'
import {AddLocationAltOutlined,PhoneIphone,EmailOutlined } from '@mui/icons-material';

const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'AddLocationAltOutlined':
        return <AddLocationAltOutlined/>;
      case 'PhoneIphone':
        return <PhoneIphone/>;
      case 'EmailOutlined':
        return <EmailOutlined/>;
      default:
        return null; 
    }
  };
export default function Contact() {
  return (
    <>
        <div className='contact'>
            <div className='container'>
                <Heading title="Keep in Touch"/>
                <div className='content flexsb'data-aos="zoom-in-down">
                    <div className='right'>
                        <form>
                            <div className='flex'>
                                <input type='text' placeholder='Name' data-aos='flip-left'/>
                                <input type='email' placeholder='Email' data-aos='flip-right'/>
                            </div>
                            <input type='text' placeholder='Subject' data-aos='flip-up'/>
                            <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div className='left'>
                        {contact.map((itme,i)=>(
                            <div className='box' data-aos='zoom-in' key={i}>
                                <i>{getIconComponent(itme.icon)}</i>
                                <p>{itme.text1}</p>
                                <p>{itme.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
