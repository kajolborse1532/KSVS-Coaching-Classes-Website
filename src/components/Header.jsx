import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../images/KSVS.jpg'; // Adjust the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faBlog, faImages, faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        if (isNavOpen) {
            document.querySelector('.container').classList.add('sidebar-closed');
        } else {
            document.querySelector('.container').classList.remove('sidebar-closed');
        }
    };

    return (
        <header className="header">
            <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={toggleNav}>&times;</button>
                <div className="overlay-content">
                    <li><Link to="/home" onClick={toggleNav}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to="/suggestion" onClick={toggleNav}><FontAwesomeIcon icon={faLightbulb} /> Suggestion</Link></li>
                    <li><Link to="/blogs" onClick={toggleNav}><FontAwesomeIcon icon={faBlog} /> Blogs</Link></li>
                    <li><Link to="/gallery" onClick={toggleNav}><FontAwesomeIcon icon={faImages} /> Gallery</Link></li>
                    <li><Link to="/about" onClick={toggleNav}><FontAwesomeIcon icon={faUser} /> About</Link></li>
                    <li><Link to="/contact" onClick={toggleNav}><FontAwesomeIcon icon={faPhone} /> Contact Us</Link></li>
                    <li><Link to="/enquiry" onClick={toggleNav}><FontAwesomeIcon icon={faEnvelope} /> Enquiry</Link></li>
                </div>
            </div>
            <button onClick={toggleNav} className="nav-toggle btn btn-primary mx-3 my-3">
                {isNavOpen ? '✖' : '☰'}
            </button>
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" style={{ width: '100px', height: 'auto' }} />
                <h1 style={{ fontSize: '24px', marginLeft: '10px' }}>KSVS Coaching Center, Pune</h1>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/suggestion">Suggestions</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/enquiry">Enquiry</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
