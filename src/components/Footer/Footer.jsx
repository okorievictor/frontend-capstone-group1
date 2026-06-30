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
          <p className="footer-names">
            <a href="https://github.com/okorievictor" target="_blank" rel="noopener noreferrer" className="footer-link">Victor</a>,
            <a href="https://github.com/Joshda-Major" target="_blank" rel="noopener noreferrer" className="footer-link">Joshua Unekwu</a>,
            <a href="https://github.com/Logeri29" target="_blank" rel="noopener noreferrer" className="footer-link">Loveth</a>,
            <a href="https://github.com/gift2354" target="_blank" rel="noopener noreferrer" className="footer-link">Gift</a>,
            <a href="https://github.com/dikeIQ" target="_blank" rel="noopener noreferrer" className="footer-link">Dike</a>,
            <a href="https://github.com/iheanachojoshua1-lgtm" target="_blank" rel="noopener noreferrer" className="footer-link">Joshua Iheanacho</a>,
            <a href="https://github.com/Femibliss" target="_blank" rel="noopener noreferrer" className="footer-link">Bolarinwa</a>,
            <a href="https://github.com/Danstringz" target="_blank" rel="noopener noreferrer" className="footer-link">Daniel</a>,
            <a href="https://github.com/eunicenwede04" target="_blank" rel="noopener noreferrer" className="footer-link">Eunice</a>
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright-line">
            ©2026 Design by <a href="https://amakandukwu.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Amaka</a> & <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer" className="footer-link">Ifeoma A.</a> Built by <a href="https://github.com/okorievictor/frontend-capstone-group1" target="_blank" rel="noopener noreferrer" className="footer-link">Group1</a>. All rights reserved
          </p>
          <div className="footer-brand">
            <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer" className="footer-link-large">TSAcademy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
