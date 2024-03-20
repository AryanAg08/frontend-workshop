import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; 2024 Your Company</p>
                    <div className="social-icons">
                        <a href="https://example.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://example.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://example.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://example.com"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
