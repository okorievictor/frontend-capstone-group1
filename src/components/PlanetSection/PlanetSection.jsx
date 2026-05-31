import React, { useState, useEffect } from 'react';
import PlanetCard from '../PlanetCard/PlanetCard';
import './PlanetSection.css';

const planetImageMap = {
  Mercury: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/mercury.webp",
  Venus: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/venus.webp",
  Earth: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/earth.jpg",
  Mars: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/mars.webp",
  Jupiter: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/jupiter.webp",
  Saturn: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/saturn.webp",
  Uranus: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/uranus.webp",
  Neptune: "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829741875396%29.png",
  Pluto: "https://raw.githubusercontent.com/Anurella/Anurella.github.io/master/images/planets/pluto.webp"
};

const PlanetSection = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://anurella.github.io/json/planets.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlanets(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch planets:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <section id="planets" className="planet-section">
      <div className="planet-section-content">
        <h2 className="planet-section-heading">Visualizing the Differences Between Planets</h2>
        <p className="planet-section-description">
          Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how
          vastly different terrestrial planets are from gas giants and ice giants.
        </p>

        {loading && <p className="planet-section-status">Loading planets...</p>}
        {error && <p className="planet-section-status error">Something went wrong. Please try again.</p>}

        {!loading && !error && (
          <div className="planet-grid">
            {planets.map((planet, index) => (
              <PlanetCard
                key={index}
                name={planet.planet}
                distanceFromSun={`${planet.distanceFromSun} million km`}
                image={planetImageMap[planet.planet] || planet.image.replace('../', '/')}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlanetSection;