import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-top">
          <h4 className="footer-heading">About</h4>
          <p className="footer-names">
            Victor, Joshua Unekwu, Gift, Dike, Believe-God, Joshua Iheanacho, Daniel
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="footer-copyright-line">
              ©2026 Design by{' '}
              <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer" className="footer-link">Amaka</a>
              {' '}&{' '}
              <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer" className="footer-link">Ifeoma A.</a>
            </p>
            <p className="footer-copyright-line">
              Built by{' '}
              <a href="https://github.com/okorievictor/frontend-capstone-group1" target="_blank" rel="noopener noreferrer" className="footer-link">Group1</a>. All rights reserved
            </p>
          </div>

          <div className="footer-brand">
            <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer" className="footer-link-large">
              TSAcademy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;