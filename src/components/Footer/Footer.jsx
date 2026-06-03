import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" data-reveal>
      {/* OLD IMPLEMENTATION
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
            <p className="footer-copyright-line">©2026 Design by Amaka & Ifeoma A.</p>
            <p className="footer-copyright-line">Built by Group1. All rights reserved</p>
          </div>
          <div className="footer-brand">
            <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer" className="footer-link-large">
              TSAcademy
            </a>
          </div>
        </div>
      </div>
      */}

      <div className="footer-container footer-container--updated">
        <div className="footer-top">
          <h4 className="footer-heading">About</h4>
          <p className="footer-names">first name of group members</p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright-line">
            ©2026 Design by Amaka &amp; Ifeoma A. Built by GroupName. All rights reserved
          </p>
          <div className="footer-brand">
            <span className="footer-link-large">TSAcademy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
