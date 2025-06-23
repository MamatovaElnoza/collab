import React, { useState } from 'react';
import './side.css';

const Sidebar = () => {
    const [active, setActive] = useState('gallery');
    const menuItems = ['home', 'gallery', 'about', 'pricing', 'contact'];

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h1 className="logo">Mostudio</h1>
                <nav className="nav">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`nav-link ${active === item ? 'active' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="sidebar-bottom">
                <p className="newsletter-label">Subscribe for Newsletter</p>
                <input type="email" placeholder="Enter Email Address" className="email-input" />
                <p className="copyright">
                    Copyright ©2025 All rights reserved | This template is made with
                    <span className="heart"> ♥ </span>by
                    <a href="https://colorlib.com" target="_blank" rel="noreferrer"> Colorlib.com</a>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
