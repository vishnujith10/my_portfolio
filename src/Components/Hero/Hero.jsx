import React from 'react'
import './Hero.css'
import resume from '../../assets/resume_vishnu.pdf'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="diagonal-bg"></div>
        <h1>A pasionate Frontend developer</h1>
        <p>in terms of designing websites that aren't only efficient but also aesthetically pleasing. Experienced in Html & css, React and more, I am a specialist in creating seamless experiences for users.</p>
        <div className="hero_action">
            <a href={resume} className="hero_connect">Resume</a>
            <a href="#" className="hero_resume">My Works</a>
        </div>
    </div>
  )
}

export default Hero