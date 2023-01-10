import React from "react";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import {AiFillHome} from "react-icons/ai"
import {MdBakeryDining} from "react-icons/md";
import {BiHappyBeaming} from "react-icons/bi";
import {AiFillPhone} from "react-icons/ai"

const footer = () => {
  return (
    <footer>
      <div className="p-5 bg-black text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:cols-1 md:cols-2 lg:grid-cols-4 gap-2 ">
            <div className=" mb-5">
              <h4 className="text-2xl pb-4">
                {" "}
                <strong>Migajitas</strong> <br /> "Una Migaja De Gran Sabor"{" "}
              </h4>
              <p className="text-gray-400">
                Dirección: Calz. Sta. Cruz 169-A San Simón Benito Juárez 03660
                Ciudad de México CDMX <br /> 
                <br /> <strong>Telefono:</strong>  5612081391
                <br /> <strong>Horario de atención:</strong>  6:00 Am  9:00 Pm
              </p>
            </div>
            <div className=" mb-5 ">
              <ul >
                <li className="pb-4 ml-3 mt-2"> <AiFillHome/> Inicio </li>
                <li className="pb-4 ml-3 mt-2"> <BiHappyBeaming/>  Acerca de nosotros</li>
                <li className="pb-4 ml-3 mt-2"> <AiFillPhone/>  Contactanos</li>
                <li className="pb-4 ml-3 mt-2"> <MdBakeryDining/>  Menú</li> 
              </ul>
            </div>
            <div className=" mb-5">
              <ul >
                <li className="pb-4 ml-3 mt-2"> <AiFillHome/> Inicio</li>
                <li className="pb-4 ml-3 mt-2"> <BiHappyBeaming/> Acerca de nosotros</li>
                <li className="pb-4 ml-3 mt-2"> <AiFillPhone/> Contactanos</li>
                <li className="pb-4 ml-3 mt-2"> <MdBakeryDining/> Menú</li>
              </ul>
            </div>
            <div className=" mb-5">
              ¡Siguenos en nuestras redes sociales!
              <ul className="text-gray-400">
                <li className="pt-4">
                  {" "}
                  <strong>migajitas.hornea</strong> <br />{" "}
                  <img src={instagram} p="migajitas.hornea" alt="" />{" "}
                </li>

                <li className="pt-4">
                  {" "}
                  <strong>migajitas.hornea</strong> <br />{" "}
                  <img src={facebook} p="migajitas.hornea" alt="" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
