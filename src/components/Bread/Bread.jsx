import React, { useState } from "react";
import { data } from "../../data/data";

const Bread = () => {
  //   console.log(data);
  const [breads, setBreads] = useState(data);

  //Filter Type sweet/salad/others
  const filterType = (category) => {
    setBreads(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by Price

  const filterPrice = (price) => {
    setBreads(
        data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        El Pan Hecho Para Ti
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex- justify-between flex-wrap">
            <button onClick={()=> setBreads(data)} className=" m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              Todos
            </button>
            <button onClick={() => filterType('sweet')} className=" m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              Pan Dulce
            </button>
            <button onClick={() => filterType('salad')} className=" m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              Pan Salado
            </button>
            <button onClick={() => filterType('others')} className=" m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              Otros
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => filterPrice('$')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className="m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display breads*/}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {breads.map((items, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105"
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={items.image}
              alt={items.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{items.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {items.price}
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bread;
