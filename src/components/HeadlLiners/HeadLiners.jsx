import React from "react";
import { AiFillHeart } from "react-icons/ai";
import {GiWinterGloves} from "react-icons/gi"
import {BiHappyBeaming} from "react-icons/bi"

const HeadLiners = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className=" rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
          Preparados con cariño
          </p>
          <p className="px-2 text-1xl py-3">
Especialmente  para ti <AiFillHeart className="absolute"/>  
          </p>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      {/* Card */}
      <div className=" rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Un desayuno especial
          </p>
          <p className="px-2 text-1xl py-3">Hechos para ti <GiWinterGloves className="absolute"/>  
          </p>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>

      {/* Card */}
      <div className=" rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            Ven y deleita tu paladar
          </p>
          <p className="px-2 text-1xl py-3"> bonapeti  <BiHappyBeaming className="absolute"/>  
          </p>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1510689/pexels-photo-1510689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      
    </div>
  );
};

export default HeadLiners;
