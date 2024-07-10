import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Suggestion from './components/Suggestion';
import About from './components/About';
import Blogs from './components/Blogs';
import Course from './components/Course';
import Registration from './components/Registration'; // Import Registration component
import Login from './components/Login'; // Make sure to import the Login component
import './App.css';
import ChatbotComponent from './chatbot/ChatbotComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this path is correct
import './components/Header.css';
import logo from './images/KSVS.jpg'; // Adjust the path to your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faBlog, faImages, faUser, faPhone, faEnvelope, faUserCircle, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';
import { useUser, UserProvider } from './UserContext';

const App = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);
    const { currentUser } = useUser();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };

    return (
        <div>
            <header className="d-flex justify-content-between align-items-center py-3 mb-4"></header>
            <div className="container">
                <header className="header">
                    <div id="myNav" className={`overlay ${isNavOpen ? 'open' : ''}`}>
                        <button className="closebtn" onClick={toggleNav}>&times;</button>
                        <div className="overlay-content">
                            <ul>
                                <li><Link to="/" onClick={toggleNav}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
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
                            {currentUser ? (
                                <li className="nav-item">
                                    <Link className="nav-link custom-color" to="/profile">
                                        <FontAwesomeIcon icon={faUserCircle} /> Profile
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <LoginButton />
                                </li>
                            )}
                        </ul>
                    </nav>
                </header>
                <div className={`content ${isNavOpen ? '' : 'sidebar-closed'}`}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/suggestion" element={<Suggestion />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Registration />} /> {/* Add the Login route */}
                    </Routes>
                    <ChatbotComponent visible={isChatbotVisible} />
                    <button className="chatbot-toggle" onClick={toggleChatbot}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const LoginButton = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <button className="btn custom-button" onClick={handleLoginClick}>
            Login
        </button>
    );
};

const AppWrapper = () => (
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>
);

export default AppWrapper;
