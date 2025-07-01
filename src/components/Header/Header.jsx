// / src/components/Header/Header.jsx
import React, { useState } from "react"; // Import useState
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    // Function to close drawer when a link is clicked
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };
    return (
        <>
            <header class="header1">
                <h1 class="clg-name">Vivekanand College</h1>
                <nav>
                    <Link to="/home" class='nav-desc' data-discover="true">Home</Link>
                    <Link to="/about" class='nav-desc' data-discover="true">About</Link>
                    <Link to="/courses" class='nav-desc' data-discover="true">Courses</Link>
                    <Link to="/contact" class='nav-desc' data-discover="true">Contact Us</Link>
                    {/* <Link to="/apply" className='nav' data-discover="true">Apply Now!</Link> */}
                    <Link to="/apply" data-discover="true" class="btn">Apply Now!</Link>{" "}
                </nav>
                {/* Mobile Hamburger Button */}
                <button className="hamburger-menu" onClick={toggleDrawer}>
                    <span className="hamburger-icon"></span>
                    <span className="hamburger-icon"></span>
                    <span className="hamburger-icon"></span>
                </button>
                {/* Mobile Drawer Navigation */}
                <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                    <button className="close-drawer-btn" onClick={toggleDrawer}>
                        ✕
                    </button>
                    <Link to="/" className="nav-item" onClick={closeDrawer}>
                        Home
                    </Link>
                    <Link to="/about" className="nav-item" onClick={closeDrawer}>
                        About
                    </Link>
                    <Link to="/courses" className="nav-item" onClick={closeDrawer}>
                        Courses
                    </Link>
                    <Link to="/contact" className="nav-item" onClick={closeDrawer}>
                        Contact
                    </Link>
                    <Link
                        to="/admissions"
                        className="nav-item btn primary-btn"
                        onClick={closeDrawer}
                    >
                        Apply Now!
                    </Link>
                </nav>
                {/* Overlay when drawer is open */}
                {isDrawerOpen && (
                    <div className="drawer-overlay" onClick={toggleDrawer}></div>
                )}
            </header>
        </>
    )
}

export default Header;