import React, { useRef } from 'react';

export const baseContainerStyles = "bg-white border border-gray-200 p-6 mb-6 rounded-lg shadow-sm relative";
export const baseH3Styles = "text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4 mt-0";
export const baseButtonStyles = "text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-colors duration-200 m-1 disabled:opacity-50";
const baseInputStyles = "text-gray-300 p-2 border border-gray-300 rounded-md mr-2 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none";

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Anda berhasil fokus!";
    }
  };

  const handleScrollClick = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={baseContainerStyles}>
      <h3 className={baseH3Styles}>1. Implementasi useRef</h3>
      
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Klik tombol untuk fokus" 
        className={baseInputStyles}
      />
      
      <button 
        onClick={handleFocusClick} 
        className={`${baseButtonStyles} bg-blue-600 hover:bg-blue-700`}
      >
        Fokus ke Input
      </button>
      
      <button 
        onClick={handleScrollClick} 
        className={`${baseButtonStyles} bg-green-600 hover:bg-green-700`}
      >
        Scroll ke Input
      </button>
    </div>
  );
};

export default FocusInput;