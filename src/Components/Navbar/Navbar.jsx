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
        if (menuRef.current) {
            menuRef.current.style.right = "0";
            setIsMenuOpen(true);
        }
    }
    
    const closeMenu = () => {
        if (menuRef.current) {
            menuRef.current.style.right = "-350px";
            setIsMenuOpen(false);
        }
    }

    return (
        <div className='navbar'>
            <div className="navbar_logo_main">
                <div className="animated_card1">
                    <span className="nav_logo">Vishnu</span>
                </div>
            </div>
            <ul ref={menuRef} className='nav_menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className="nav_mob_close" />
                <li><AnchorLink className='anchor_link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Works</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
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
                {!isMenuOpen && <img ref={menuButtonRef} src={menu_open} onClick={openMenu} alt="Open menu" className='nav_mob_open' />}
            </div>
        </div>
    )
}

export default Navbar