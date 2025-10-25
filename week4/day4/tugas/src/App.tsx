import React from 'react';
import FocusInput from './components/UseRefExample/FocusInput';
import PortalExample from './components/PortalExample/PortalExample';
import HOCExample from './components/HOCExample/HOCExample';
import RenderPropsExample from './components/RenderPropsExample/RenderPropsExample';

const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex justify-center">
      <h1 className="text-red-500  rounded bg-white shadow-md text-3xl md:text-4xl font-bold text-center border-b-2 border-gray-300/50 p-4 mb-8">
        React Advanced Patterns
      </h1>
      </div>
      
      <FocusInput />
      <PortalExample />
      <HOCExample />
      <RenderPropsExample />
    </div>
  );
}

export default App;