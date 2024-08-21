
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from '../Footer.module.css'; 

const Footer = () => {
    return (
      <footer className="bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <h5 className={styles['footer-h5']}>LUFDA</h5>
              <p>Frisbee foreverrrrrrrrr.</p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className={styles['social-icon']} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className={styles['social-icon']} />
                </a>
                <a href="https://www.instagram.com/ufdalufda/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={styles['social-icon']} />
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <h5 className={styles['footer-h5']}>Coming Up</h5>
              <ul className="list-unstyled">
                <li className={styles['footer-li']}>Fall Season</li>
                <li className={styles['footer-li']}>Recruitment</li>
                <li className={styles['footer-li']}>Summer Camp</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className={styles['footer-h5']}>About Us</h5>
              <ul className="list-unstyled">
                <li className={styles['footer-li']}>Our Story</li>
                <li className={styles['footer-li']}>Meet the team</li>
                <li className={styles['footer-li']}>Captains</li>
                <li className={styles['footer-li']}>Alumni</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className={styles['footer-h5']}>Frisbee</h5>
              <ul className="list-unstyled">
                <li className={styles['footer-li']}>About Frisbee</li>
                <li className={styles['footer-li']}>Join Us?</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className={styles['footer-h5']}>Have a Questions?</h5>
              <p>700 College Dr, Decorah, IA, USA</p>
              <p>+2 392 3929 210</p>
              <p>info@yourdomain.com</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className={`${styles.copyright} copyright`}>Lufda ©2024 | All rights reserved</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
