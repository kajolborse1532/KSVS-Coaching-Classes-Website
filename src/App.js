import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Suggestion from './components/Suggestion';
import About from './components/About';
import Blogs from './components/Blogs';
import Course from './components/Course';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this path is correct
import './components/Header.css';
import logo from './images/KSVS.jpg'; // Adjust the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faBlog, faImages, faUser, faPhone, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';


const App = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        const containerElement = document.querySelector('.container');
        if (isNavOpen) {
            containerElement.classList.add('sidebar-closed');
        } else {
            containerElement.classList.remove('sidebar-closed');
        }
    };

    return (
        <div>
        <h1> hii 
         hiihii
         hii
        </h1>
        <h1> hii 
         hiihii
         hii
        </h1>
        <h1> hii 
         hiihii
         hii
        </h1>
        <h1> hii 
         hiihii
         hii
        </h1>
        <h1> hii 
         hiihii
         hii
        </h1>

        <Router>
            <div className="container">
                <header className="header">
                    <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`}>
                        <button className="closebtn" onClick={toggleNav}>&times;</button>
                        <div className="overlay-content">
                            <ul>
                                <li><Link to="/home" onClick={toggleNav}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                                <li><Link to="/suggestion" onClick={toggleNav}><FontAwesomeIcon icon={faLightbulb} /> Suggestion</Link></li>
                                <li><Link to="/blogs" onClick={toggleNav}><FontAwesomeIcon icon={faBlog} /> Blogs</Link></li>
                                <li><Link to="/gallery" onClick={toggleNav}><FontAwesomeIcon icon={faImages} /> Gallery</Link></li>
                                <li><Link to="/about" onClick={toggleNav}><FontAwesomeIcon icon={faUser} /> About</Link></li>
                                <li><Link to="/contact" onClick={toggleNav}><FontAwesomeIcon icon={faPhone} /> Contact Us</Link></li>
                                <li><Link to="/course" onClick={toggleNav}><FontAwesomeIcon icon={faEnvelope} /> Course</Link></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={toggleNav} className={`nav-toggle btn btn-primary mx-3 my-3 ${isNavOpen ? 'active' : ''}`}>
                        {isNavOpen ? '✖' : '☰'}
                    </button>
                    <div className="header-content">
                        <img src={logo} alt="Logo" className="logo" />
                        <h1>KSVS Coaching Center, Pune</h1>
                    </div>
                    <nav className="header-nav">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <Link className="nav-link custom-color" to="/profile">
                                    <FontAwesomeIcon icon={faUserCircle} /> Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn custom-button" onClick={() => alert('Login button clicked')}>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className={`content ${isNavOpen ? '' : 'sidebar-closed'}`}>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/suggestion" element={<Suggestion />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/course" element={<Course />} /> {/* Set the home page as default */}
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
        </div>
    );
};

export default App;
