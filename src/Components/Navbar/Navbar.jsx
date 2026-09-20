import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('portfolio_theme') || 'dark';
    });

    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio_theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Only proceed if menu is open
            if (!isMenuOpen) return;

            // Check if refs are available
            const menuElement = menuRef.current;
            const buttonElement = menuButtonRef.current;

            // Only close if click is outside both menu and button
            if (menuElement && buttonElement && 
                !menuElement.contains(event.target) && 
                !buttonElement.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const openMenu = () => {
        setIsMenuOpen(true);
    }
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className='navbar'>
            <div className="navbar_logo_main">
                <div className="animated_card1">
                    <span className="nav_logo">Vishnu</span>
                </div>
            </div>
            <ul ref={menuRef} className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="nav_mob_close" onClick={closeMenu} aria-label="Close menu">
                    <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3216 0.678819C14.6963 1.05359 14.6963 1.66113 14.3216 2.0359L2.10786 14.2521C1.73306 14.627 1.1253 14.627 0.750501 14.2521V14.2521C0.375808 13.8774 0.375807 13.2698 0.750501 12.8951L12.9642 0.678818C13.339 0.303939 13.9468 0.30394 14.3216 0.678819V0.678819Z" fill="currentColor"/>
                        <path d="M14.2495 14.3212C14.6242 13.9464 14.6242 13.3389 14.2495 12.9641L2.03576 0.747858C1.66096 0.372979 1.0532 0.372981 0.678402 0.74786V0.74786C0.303708 1.12263 0.303708 1.73017 0.678402 2.10494L12.8921 14.3212C13.2669 14.6961 13.8747 14.6961 14.2495 14.3212V14.3212Z" fill="currentColor"/>
                    </svg>
                </button>
                <li><AnchorLink className='anchor_link' href='#home'><p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#about'><p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#services'><p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#work'><p onClick={() => { setMenu("work"); closeMenu(); }}>Works</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#contact'><p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <div className="nav_actions">
                <button className="theme_toggle_btn" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`} aria-label="Toggle Theme">
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
                <div className="nav_connect"><AnchorLink className='anchor_link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                {!isMenuOpen && (
                    <button ref={menuButtonRef} onClick={openMenu} className='nav_mob_open' aria-label="Open menu">
                        <svg width="20" height="16" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35.9988" height="4" rx="2" fill="currentColor"/>
                            <rect x="13.0898" y="12.5" width="22.9083" height="4" rx="2" fill="currentColor"/>
                            <rect x="4.91016" y="25" width="31.0899" height="4" rx="2" fill="currentColor"/>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar