import React, { useState } from 'react';

interface ToggleButtonProps {
  children: any;
  isChecked: boolean;
  onToggle: (isChecked: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  isChecked,
  onToggle,
}) => {
  const handleToggle = () => {
    const newValue = !isChecked;
    onToggle(newValue);
  };

  return (
    <label className="flex items-center cursor-pointer gap-4">
      {children}
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner transition-colors duration-300 ease-in-out ${
            isChecked ? 'bg-green-500' : ''
          }`}
        />
        <div
          className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow top-[-4px] left-[-4px] transition-transform duration-300 ease-in-out ${
            isChecked ? 'transform translate-x-full' : ''
          }`}
        />
      </div>
    </label>
  );
};

export default ToggleButton;
