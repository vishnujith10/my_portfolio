import React, { useRef, useState, useEffect } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

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
            {!isMenuOpen && <img ref={menuButtonRef} src={menu_open} onClick={openMenu} alt="" className='nav_mob_open' />}
            <ul ref={menuRef} className='nav_menu'>
                <img src={menu_close} onClick={closeMenu} alt="" className="nav_mob_close" />
                <li><AnchorLink className='anchor_link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#work'><p onClick={() => setMenu("work")}>Works</p></AnchorLink></li>
                <li><AnchorLink className='anchor_link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
            </ul>
            <div className="nav_connect"><AnchorLink className='anchor_link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar