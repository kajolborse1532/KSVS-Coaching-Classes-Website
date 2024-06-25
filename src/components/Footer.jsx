import React from 'react';
import { Link } from 'react-router-dom';
import KSVSLogo from '../images/KSVS.jpg'; // Import the KSVS logo image

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="about">
                    <img src={KSVSLogo} alt="KSVS Coaching Centre" style={{ maxWidth: '100px', marginBottom: '10px' }} />
                    <p><span >At KSVS Coaching Centre, we are dedicated to helping students achieve their goals through comprehensive suggestions and expert guidance.</span></p>
                </div>
                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/terms-condition">Terms Condition</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="get-in-touch">
                    <h2>Get In Touch</h2>
                    
                    <div className="get-in-touch1">
                        <address>
                        <p >KSVS Coaching Centre</p>
                        <p>Bhuban Apartment, 1st Floor,</p>
                        <p>21/2/1A, B N Ghosal Road,</p>
                        <p>Pune-700 056</p>
                    </address></div>
                    <p>Phone: 7028120994</p>
                    <p>Email: shravnirajmane2002@gmail.com</p>
                </div>
            </div>
            <div className="footer-copy">
            <p>&copy; 2024 KSVS Coaching Center, Pune. All rights reserved.</p>
            <p>
                <Link to="/privacy-policy">Privacy Policy</Link> | 
                <Link to="/terms-of-service"> Terms of Service</Link>
            </p>
            </div>
        </footer>
    );
};

export default Footer;
