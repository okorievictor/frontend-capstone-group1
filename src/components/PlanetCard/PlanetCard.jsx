import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ name, distanceFromSun, image }) => {
  return (
    <figure className="planet-card">
      <img
        src={image}
        alt={`Image of the planet ${name}`}
        className="planet-image"
        onError={(e) => { e.target.onerror = null; e.target.src = "/hero-planet.png"; }}
      />
      <figcaption className="planet-caption">
        <p className="planet-name">{name}</p>
        <p className="planet-distance">{distanceFromSun}</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;