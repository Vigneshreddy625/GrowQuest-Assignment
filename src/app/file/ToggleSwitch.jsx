"use client";
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={handleToggle}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
      />
    </div>
  );
};

export default ToggleSwitch;