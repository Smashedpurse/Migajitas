import React from "react";
import Map from "../GoogleMap/Map"
import credentials from "../../credentials"

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`

const Category = (props) => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-6">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-4">
        Encuentranos
      </h1>
      <div className="grid grid-cols-1 sm:cols-1 md:cols-1 lg:grid-cols-2 gap-2 ">
        <strong className="text-center">
          Migajitas
          <p className="text-center">
            Calz. Sta. Cruz 169-A, San Simón <br /> Benito Juárez 03660 <br /> Ciudad de
            México  CDMX
          </p>
          <p>Telefono: 5612081391</p>
        </strong>
        {/* Google maps */}
        <Map
          googleMapURL= {mapURL}
          containerElement= {<div style={{height: '400px'}}/>}
          mapElement= {<div style={{height: '100%'}}/>}
          loadingElement= {<p>Cargando</p>}
        />
      </div>
    </div>
  );
};


export default Category;
