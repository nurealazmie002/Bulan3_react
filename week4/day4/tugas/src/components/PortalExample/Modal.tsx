import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const modalRoot = document.getElementById('modal-root');

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  if (!modalRoot) {
    console.error("Elemen '#modal-root' tidak ditemukan.");
    return null; 
  }

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 sm:p-8 rounded-lg shadow-xl min-w-[300px] max-w-lg text-center" 
        onClick={e => e.stopPropagation()}
      >
        {children}
        
        <button 
          onClick={onClose} 
          className="mt-6 bg-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-colors duration-200 hover:bg-red-700"
        >
          Tutup Modal
        </button>
      </div>
    </div>,
    modalRoot 
  );
};

export default Modal;