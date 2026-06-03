import React from 'react';
import './PlanetCard.css';
import heroPlanetsImage from '../../assets/hero-planets.png';

const PlanetCard = ({ name, distanceFromSun, image }) => {
  return (
    <figure className="planet-card">
      <img
        src={image}
        alt={`Image of the planet ${name}`}
        className="planet-image"
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = heroPlanetsImage;
        }}
      />
      <figcaption className="planet-caption">
        <p className="planet-name">{name}</p>
        <p className="planet-distance">{distanceFromSun}</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;
