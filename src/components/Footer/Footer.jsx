import React from "react";
import instagram from "../../public/instagram.png";
import facebook from "../../public/facebook.png";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer>
      <div className="p-5 bg-black text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:cols-2 lg:grid-cols-4 gap-2">
            <div className=" mb-5">
              <h4 className="text-2xl pb-4"> <strong>Migajitas</strong>  <br /> "Una Migaja De Gran Sabor" </h4> 
              <p className="text-gray-500">Dirección: 
              Calz. Sta. Cruz 169-A 
              San Simón, Benito Juárez
              03660 Ciudad de México 
              CDMX 
              Telefono: 5612081391</p>
            </div>
            <div className=" mb-5 ">
              <ul>
                <li>Inicio</li>
                <li>Acerca de nosotros</li>
                <li>Contactanos</li>
                <li>Menú</li>
              </ul>
            </div>
            <div className=" mb-5">
              <ul>
                <li>Inicio</li>
                <li>Acerca de nosotros</li>
                <li>Contactanos</li>
                <li>Menú</li>
              </ul>
            </div>
            <div className=" mb-5">
              ¡Siguenos en nuestras redes sociales!
              <ul>
                <Link to="https://www.instagram.com/migajitas.hornea">
                  <li className="pt-4">
                    {" "}
                    <strong>migajitas.hornea</strong> <br />{" "}
                    <img src={instagram} p="migajitas.hornea" alt="" />{" "}
                  </li>
                </Link>
                <Link to="https://www.facebook.com/Migajitas.hornea">
                  <li className="pt-4">
                    {" "}
                    <strong>migajitas.hornea</strong> <br />{" "}
                    <img src={facebook} p="migajitas.hornea" alt="" />{" "}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
