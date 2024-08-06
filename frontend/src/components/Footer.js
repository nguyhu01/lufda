import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import '../Footer.css';

const Footer = () => {
    return (
      <footer className="bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <h5>LUFDA</h5>
              <p>Frisbee foreverrrrrrrrr.</p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="social-icon" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="social-icon" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>Senior Team</li>
                <li>For Kids</li>
                <li>Reviews</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>About Us</h5>
              <ul className="list-unstyled">
                <li>Our Story</li>
                <li>Meet the team</li>
                <li>Coach</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Press</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Have a Questions?</h5>
              <p>
                700 College Dr, Decorah, IA, USA
              </p>
              <p>+2 392 3929 210</p>
              <p>info@yourdomain.com</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p class="copyright">Lufda ©2024 | All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;