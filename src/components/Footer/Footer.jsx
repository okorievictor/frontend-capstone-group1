import '.Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>
          We are a team of frontend developers from 
          TS Academy Frontend Development course — Group 1.
        </p>
      </div>

      <div className="footer-links">
        <a href="https://amakandukwu.com/" target="_blank" rel="noreferrer">
          Amaka
        </a>
        <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">
          Ifeoma
        </a>
        <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">
          TSacademy
        </a>
        <a href="https://github.com/okorievictor/frontend-capstone-group1" target="_blank" rel="noreferrer">
          Group 1
        </a>
      </div>

      <p className="footer-copy">&copy; 2026 Group 1. All rights reserved.</p>
    </footer>
  );
}

export default Footer;