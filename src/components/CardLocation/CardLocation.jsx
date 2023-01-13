/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Mapa from "../../images/mapa.PNG";

const CardLocation = () => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-md">
      <img src={Mapa} className="rounded-md border-orange-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full "/>
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
  );
};

export default CardLocation;
