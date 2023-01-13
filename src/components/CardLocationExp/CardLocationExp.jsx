/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Mapa from "../../images/mapa.PNG";

const CardLocationExp= () => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-md">
      <img src={Mapa} className="rounded-md border-orange-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full "/>
      <div className="p-6">
        <h2 className="bg-black font-semibold text-white px-2 py-1 rounded-full text-xs mb-2 shadow-lg">
          Migajitas Expendio Iztapalapa
        </h2>
        <p className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
          Horario de atención: 9:00 Am - 9:00 pm
        </p>
        <p className="text-sm mt-1">
        Décima Cda. Jose Clemente Orozco, Valle de San Lorenzo, Iztapalapa, 09970 Ciudad de México, CDMX
        </p>
      </div>
    </div>
  );
};

export default CardLocationExp;
