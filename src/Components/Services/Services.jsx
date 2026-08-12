import React from 'react'
import './Services.css'
import '../shared/Background.css'
import Services_Data from '../../assets/services_data'
// import arrowIcon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id='services' className='services'>
                <div className="diagonal-bg"></div>

        <div className="services_title">
            <h1>My Services</h1>
        </div>
        <div className="services_container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className='services_format'>
                    
                    <h1>{service.s_name}</h1>
                    <p>{service.s_desc}</p>
                    <div className='services_readmore'>
                        <p>Learn More</p>
                        {/* <img src={arrowIcon} alt="" /> */}
                    </div>
                </div>
            })}

        </div>
    </div>
  )
}

export default Services