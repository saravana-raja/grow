import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1>The Gem Grove</h1>
                <nav>
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#residents">Residents</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="hamburger" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
