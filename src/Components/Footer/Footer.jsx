import React from 'react'
import './Footer.css'
import userIcon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footertop_left">
            <div className="navbar_logo_main">
        {/* <div className="animated_card">
            <span className="nav_logo">Sebin</span>
        </div>   */}
    </div>
                <p>Newly minted IT professional, eager to translate academic insights into dynamic tech solutions. Seeking opportunities to grow within an innovative organization that values fresh perspectives on technology challenges. Passionate about diving deep into technology, discovering new tools, and methodologies.</p>

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
            <p>© 2025 Vishnujith N B. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer