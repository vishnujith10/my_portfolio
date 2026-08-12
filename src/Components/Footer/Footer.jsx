import React from 'react'
import './Footer.css'
import githubIcon from '../../assets/github_icon.svg'
import linkedinIcon from '../../assets/linkedin_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footertop_left">
            <div className="navbar_logo_main">
    </div>
                <p>React Native and full-stack developer building AI-integrated mobile and web products. Currently open to freelance work and full-time roles — always exploring new tools and approaches to ship better products.</p>

            </div>
            <div className="footertop_right">
                <a href="https://github.com/vishnujith10" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                    <img src={githubIcon} alt="GitHub" />
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/vishnujith-n-b-0a6863261/" target="_blank" rel="noopener noreferrer" className="footer_social_link">
                    <img src={linkedinIcon} alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
        <hr />
        <div className="footer_bottom">
            <p>© 2026 Vishnujith N B. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer