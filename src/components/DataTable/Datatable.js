import './DataTable.css'; // CSS File link

function DataTable() {
  return (
    <div>
      <section id="table">
<h2>Planetary Facts at a Glance</h2>
<p>Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.
  <br>
  <br>
  </br>
  <p class ="dark">
  Data about the planets of our solar system(Planetary facts taken from NASA)
</p>
  <table border="1">
    <tr>
      <th colspan="2"></th>
      <th>Name</th>
      <th>Mass</th>
      <th>Diameter</th>
      <th>Density</th>
      <th>Gravity</th>
    </tr>
    <tr>
      <th colspan="2" rowspan="4">Terristial Planets</th>
      <td>Mercury</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
    </tr>
    <tr>
            <td>Venus</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
    </tr>
    <tr>
            <td>Earth</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
    </tr>
    <tr>
            <td>Mars</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
    </tr>
    <th rowspan="4">Jovian Planets</th>
    <th rowspan="2">Gas Gaints</th>
     <td>Jupiter</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
    </tr>
  <tr>
     <td>Saturn</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
  </tr>
  <tr>
    <th rowspan="2">Ice Gaints</th>
     <td>Uranus</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
    </tr>
      <tr>
         <td>Neptune</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
  </tr>
  <tr>
    <th colspan="2">Dwarf Planets</th>
     <td>Pluto</td>
       <td>0.330</td>
       <td>4,878</td>
       <td>5427</td>
       <td>3.7</td>
  </tr>
  </table>
</section>
    </div>
  );
}

export default DataTable;