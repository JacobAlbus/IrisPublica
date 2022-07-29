import "../../styles/articles.css"
import "../../styles/electric-car-map.css"
import CarMap from "../../services/electric-car-map-service.js";

const electricCarMap = props => {
  return (
  <div class="container-fluid mb-3 mt-5" id="nib">
    <div id="spacer">A</div>

    <h2>Price Competitiveness of Electric Cars</h2>
    <p><small>August 31st, 2022</small></p>
    
    <CarMap/>
    
    <div class="row">
      <p>This is a map of electric car price competitiveness</p>
    </div>
  </div>
  );
};

export default electricCarMap;