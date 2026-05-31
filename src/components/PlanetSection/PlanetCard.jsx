import "./PlanetCard.css";

function PlanetCard({ name, distance, img }) {
  return (
    <div className="planet-card">
      <img src={img} alt={name} className="planet-img" />
      <div className="planet-info">
        <p className="planet-name">{name}</p>
        <p className="planet-distance">{distance}</p>
      </div>
    </div>
  );
}

export default PlanetCard;