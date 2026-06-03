import logo from '../../assets/logo.png';
import './Header.css'; //  CSS file link

function Header() {
  return (
    <nav className="navbar-container">
      <div className="logo-wrapper">
      {/* OLD IMPLEMENTATION
      <img src="src/assets/logo.png" alt="Space Logo" />
      */}
      <img src={logo} alt="TS Academy logo" className="navbar-logo" />
      </div>
    </nav>
  );
}

export default Header;
