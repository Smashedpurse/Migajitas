import React, { useState } from "react";
import { sliderData } from "../../data/sliderData";


const Slider = () => {

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
        <div style={{backgroundImage:`url(${sliderData[0].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div> 
    </div>
  );
};

export default Slider;
