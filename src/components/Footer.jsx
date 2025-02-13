import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer bg-gray-900 text-gray-300">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#rules">Community Rules</a></li>
                        <li><a href="#newsletter">Updates</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3><FaMapMarkerAlt /> Location</h3>
                    <p>The Gem Grove</p>
                    <p>Rajiv Gandhi Salai,</p>
                    <p>Padur, Tamil Nadu - 603103</p>
                </div>
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="#facebook" className="social-link">
                            <FaFacebook size={20} /> Facebook
                        </a>
                        <a href="#instagram" className="social-link">
                            <FaInstagram size={20} /> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 The Gem Grove. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
