import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

// Import icons (assuming you're using react-icons or similar)
// If not, you can replace these with your preferred icon solution
const FacebookIcon = () => <span className="social-icon">f</span>
const InstagramIcon = () => <span className="social-icon">i</span>
const LinkedInIcon = () => <span className="social-icon">l</span>
const TwitterIcon = () => <span className="social-icon">t</span>

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <span>
                  LUXE<span className="gold-text">ESTATE</span>
                </span>
              </div>
              <p className="footer-description">
                Luxury real estate solutions tailored to your unique lifestyle. Discover exceptional properties in the
                most desirable locations.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterIcon />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/properties">Properties</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Property Types */}
            <div className="footer-column">
              <h3 className="footer-heading">Property Types</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/properties/luxury-homes">Luxury Homes</Link>
                </li>
                <li>
                  <Link to="/properties/penthouses">Penthouses</Link>
                </li>
                <li>
                  <Link to="/properties/waterfront">Waterfront</Link>
                </li>
                <li>
                  <Link to="/properties/condos">Condos</Link>
                </li>
                <li>
                  <Link to="/properties/estates">Estates</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact Us</h3>
              <address className="footer-contact">
                <p>
                  <strong>Address:</strong>
                  <br />
                  123 Luxury Lane
                  <br />
                  Beverly Hills, CA 90210
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:info@luxestate.com">info@luxestate.com</a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            &copy; {currentYear} LUXESTATE. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
