import React from "react";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Encuentranos
      </h1>
      <div className="grid grid-cols-1 sm:cols-1 md:cols-2 lg:grid-cols-4 gap-2 ">
        <strong>
          Migajitas
          <p>
            Calz. Sta. Cruz 169-A, San Simón, Benito Juárez, 03660 Ciudad de
            México, CDMX
          </p>
          <p>Telefono: 5612081391</p>
        </strong>
      </div>
    </div>
  );
};

export default Category;
