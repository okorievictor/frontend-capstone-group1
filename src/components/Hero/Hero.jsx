import './Hero.css'; // CSS File link
import globeImage from '../../assets/globe.png';

function Hero() {
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-container" data-reveal>

      {/* Text and Buttons */}
      <div className="hero-content">
        <h1 className="hero-title">Explore Our Solar System Through Data</h1>
        <p className="hero-description">
          Understand the planets not just by name, but by measurable facts. From size and mass to gravity and density, this page breaks down the solar system in a clear, data-driven way.
        </p>

        <div className="button-group">
          <button className="btn btn-primary" onClick={() => scrollToSection('planets')}>Explore the Data</button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Contact Us</button>
        </div>
      </div>

      {/* Right Column: Globe Image */}
      <div className="hero-image-wrapper">
        <img
          src={globeImage}
          alt="Glowing Blue Earth"
          className="earth-image"
        />
      </div>

    </section>
  );
}

export default Hero;
