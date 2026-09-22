import React from 'react'
import './Hero.css'
import resume from '../../assets/Vishnujith_NB_Resume-10.pdf'
import webAppImg from '../../assets/web-app.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="diagonal-bg"></div>
        <div className="hero_container">
            <div className="hero_left">
                <h1>A passionate Full-Stack developer</h1>
                <p>I build mobile and web apps that go from idea to production not just prototypes. Experienced in Mern Stack, React Native, Next.js, TypeScript, and Supabase, with a focus on AI-integrated features and real, deployed products.</p>
                <div className="hero_action">
                    <a href={resume} className="hero_connect" target="_blank" rel="noopener noreferrer">Resume</a>
                    <AnchorLink offset={50} href='#work' className="hero_resume">My Works</AnchorLink>
                </div>
            </div>
            <div className="hero_right">
                <img src={webAppImg} alt="Web and Mobile App Development" className="hero_web_app_img" />
            </div>
        </div>
    </div>
  )
}

export default Hero