import React from 'react'
import './Footer.css'
import userIcon from '../../assets/user_icon.svg'

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
                <div className="footer_email_input">
                    <img src={userIcon} alt="" />
                    <input type="email" placeholder='Enter your email' />

                </div>
                <div className="footer_subscribe">Subscribe</div>
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