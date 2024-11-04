import React from 'react'
import Heading from '../Common/Heading'
import { services } from '../Data/dummuydata'
import { Settings, Code, CropRotate, ViewInAr, PieChart, BarChart } from '@mui/icons-material';

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'Settings':
      return <Settings />;
    case 'CropRotate':
      return <CropRotate />;
    case 'ViewInAr':
      return <ViewInAr />;
    case 'PieChart':
      return <PieChart />;
    case 'Code':
      return <Code />;
    case 'BarChart':
      return <BarChart />;
    default:
      return null;
  }
};
function Services() {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Our Services' />
          <div className='Content grid3' >
            {services.map((item, i) => (
              <div className='box' key={i} data-aos="flip-up">
                <i>{getIconComponent(item.icon)}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
