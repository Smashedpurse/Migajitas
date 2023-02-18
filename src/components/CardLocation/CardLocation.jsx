import React from "react";

const CardLocation = () => {

  const newLocal = <iframe width="700" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Calz.%20Sta.%20Cruz%20169-A,%20San%20Sim%C3%B3n,%20Benito%20Ju%C3%A1rez,%2003660%20Ciudad%20de%20M%C3%A9xico,%20CDMX&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Map"></iframe>

  return (
  <>
    <div className="grid grid-cols-1 bg-white rounded-md">
      <div className="rounded-md border-orange-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full " style={{display:"flex", justifyContent:"center"}}> {newLocal} </div> 
      <div className="p-6">
        <h2 className="bg-black font-semibold text-white px-2 py-1 rounded-full text-xs mb-2 shadow-lg">
          Migajitas San Simon
        </h2>
        <p className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
          Horario de atención: 9:00 Am - 9:00 pm
        </p>
        <p className="text-sm mt-1">
          Migajitas Calz. Sta. Cruz 169-A, San Simón Benito Juárez 03660 Ciudad
          de México CDMX Telefono: 5612081391
        </p>
      </div>
    </div>
    {/* Second Location */}
    {/* <div className="grid grid-cols-1 bg-white rounded-md">
        <img src={Mapa} className="rounded-md border-orange-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full " />
        <div className="p-6">
          <h2 className="bg-black font-semibold text-white px-2 py-1 rounded-full text-xs mb-2 shadow-lg">
            Migajitas Expendio Iztapalapa
          </h2>
          <p className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
            Horario de atención: 5:00 Pm - 10:00 pm
          </p>
          <p className="text-sm mt-1">
          Décima Cda. #21 Jose Clemente Orozco, Iztapalapa, 09970 Ciudad de México, CDMX 
          Telefono: 5612081391
          </p>
        </div>
      </div> */}

      </>

    
    
  );
};

export default CardLocation;
