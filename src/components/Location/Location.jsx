import React from "react";
import CardLocation from "../CardLocation/CardLocation";
import CardLocationExp from "../CardLocationExp/CardLocationExp";


const Category = (props) => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-6">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-4">
        Encuentranos en nuestras sucursales
      </h1>
      <div className="grid grid-cols-1 sm:cols-1 md:cols-1 lg:grid-cols-2 gap-2 ">
      <CardLocation/>
        <CardLocationExp/>
      </div>
    </div>
  );
};


export default Category;
