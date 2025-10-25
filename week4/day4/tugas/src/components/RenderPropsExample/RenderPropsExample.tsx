import React from 'react';
import MouseTracker from './MouseTracker';
import { baseContainerStyles, baseH3Styles } from '../UseRefExample/FocusInput';

const RenderPropsExample: React.FC = () => {
  return (
    <div className={`${baseContainerStyles} min-h-[250px]`}> 
      <h3 className={baseH3Styles}>4. Render Props Pattern (MouseTracker)</h3>
      <p className="text-gray-700 mb-4">Gerakkan mouse Anda.</p>

      <MouseTracker>
        {mouse => (
          <p className="font-bold text-gray-600 bg-gray-100 p-3 rounded-md inline-block">
            Posisi Mouse: (X: {mouse.x}, Y: {mouse.y})
          </p>
        )}
      </MouseTracker>

      <MouseTracker>
        {mouse => (
          <div
            className="w-24 h-24 bg-green-600 text-white flex justify-center items-center text-center rounded-md 
                       absolute pointer-events-none select-none
                       transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate(${mouse.x - 50}px, ${mouse.y - 120}px)`,
            }}
          >
            Saya Mengikuti
            (X: {mouse.x})
          </div>
        )}
      </MouseTracker>
    </div>
  );
};

export default RenderPropsExample;