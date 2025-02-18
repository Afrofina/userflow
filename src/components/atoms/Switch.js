// CustomSwitch.js
'use client'
import React, { useState } from "react";

const CustomSwitch = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <label className="flex items-center cursor-pointer">
        <div className="relative w-[75px] h-[25px]">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <div className=" w-full h-full border border-black rounded-full  shadow-inner"></div>
          <div
            className={`${
              isChecked ? "bg-black right-0 " : "bg-black left-0"
            } absolute w-[21px] mt-0.5 h-[21px] mx-2 rounded-full shadow inset-y-0  focus:outline-none transition-transform duration-300 transform`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
    </div>
  );
};

export default CustomSwitch;
