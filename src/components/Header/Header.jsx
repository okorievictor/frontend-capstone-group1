
import './Header.css'; //  CSS file link

function Header() {
  return (
    <nav className="navbar-container">
      <div className="logo-wrapper">
      <img src="src/assets/logo.png" alt="Space Logo" />
      </div>
    </nav>
  );
}

export default Header;