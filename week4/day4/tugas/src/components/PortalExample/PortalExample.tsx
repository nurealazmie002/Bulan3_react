import React, { useState } from 'react';
import Modal from './Modal';
import { baseContainerStyles, baseH3Styles, baseButtonStyles } from '../UseRefExample/FocusInput';

const PortalExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={baseContainerStyles}>
      <h3 className={baseH3Styles}>2. Membuat Portal Modal</h3>
      <p className="text-gray-700 mb-4">Klik tombol untuk membuka modal card.</p>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className={`${baseButtonStyles} bg-blue-600 hover:bg-blue-700`}
      >
        Buka Modal
      </button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-3">Ini adalah Modal Portal!</h2>
          <p className="text-gray-600">
            Ok jalan ternyata :D
          </p>
        </Modal>
      )}
    </div>
  );
};

export default PortalExample;