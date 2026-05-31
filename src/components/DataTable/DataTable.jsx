import React from 'react';
import './DataTable.css';

const planetData = [
    { group1: 'Terrestrial Planets', group1RowSpan: 4, group1ColSpan: 2, name: 'Mercury', mass: '0.330', diameter: '4,879', density: '5,429', gravity: '3.7' },
    { name: 'Venus', mass: '4.87', diameter: '12,104', density: '5,243', gravity: '8.9' },
    { name: 'Earth', mass: '5.97', diameter: '12,756', density: '5,514', gravity: '9.8' },
    { name: 'Mars', mass: '0.642', diameter: '6,792', density: '3,934', gravity: '3.7' },
    { group1: 'Jovian\nPlanets', group1RowSpan: 4, group1ColSpan: 1, group2: 'Gas Giants', group2RowSpan: 2, group2ColSpan: 1, name: 'Jupiter', mass: '1898', diameter: '142,984', density: '1,326', gravity: '23.1' },
    { name: 'Saturn', mass: '568', diameter: '120,536', density: '687', gravity: '9.0' },
    { group2: 'Ice Giants', group2RowSpan: 2, group2ColSpan: 1, name: 'Uranus', mass: '86.8', diameter: '51,118', density: '1,270', gravity: '8.7' },
    { name: 'Neptune', mass: '102', diameter: '49,528', density: '1,638', gravity: '11.0' },
    { group1: 'Dwarf Planets', group1RowSpan: 1, group1ColSpan: 2, name: 'Pluto', mass: '0.0130', diameter: '2,376', density: '1,850', gravity: '0.7' }
];

const DataTable = () => {
    return (
        <section className="data-table-section">
            <div className="data-table-container">
                <h2 className="data-table-heading">Planetary Facts at a Glance</h2>
                <p className="data-table-subtext">
                    Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.
                </p>
                <p className="data-table-note">
                    Data about the planets of our solar system (Planetary facts taken from NASA)
                </p>

                <div className="table-responsive">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th colSpan="2" className="empty-th"></th>
                                <th className="real-th">Name</th>
                                <th className="real-th">Mass (10²⁴kg)</th>
                                <th className="real-th">Diameter (km)</th>
                                <th className="real-th">Density (kg/m³)</th>
                                <th className="real-th">Gravity (m/s²)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planetData.map((planet) => (
                                <tr key={planet.name}>
                                    {planet.group1 && (
                                        <td
                                            className="group-cell"
                                            rowSpan={planet.group1RowSpan}
                                            colSpan={planet.group1ColSpan}
                                        >
                                            {planet.group1.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i !== planet.group1.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </td>
                                    )}
                                    {planet.group2 && (
                                        <td
                                            className="group-cell group-sub-cell"
                                            rowSpan={planet.group2RowSpan}
                                            colSpan={planet.group2ColSpan}
                                        >
                                            {planet.group2}
                                        </td>
                                    )}
                                    <td>{planet.name}</td>
                                    <td>{planet.mass}</td>
                                    <td>{planet.diameter}</td>
                                    <td>{planet.density}</td>
                                    <td>{planet.gravity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default DataTable;