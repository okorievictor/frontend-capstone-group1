import PlanetCard from "../PlanetSection/PlanetCard";
import planets from "../data/planets";
import "./PlanetGrid.css";

function PlanetGrid() {
  return (
    <section className="planet-section">
      <h1 className="section-title">Visualizing the Differences Between Planets</h1>
      <p className="section-subtitle">
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>
      <div className="planet-grid">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            distance={planet.distance}
            img={planet.img}
          />
        ))}
      </div>
    </section>
  );
}

export default PlanetGrid;