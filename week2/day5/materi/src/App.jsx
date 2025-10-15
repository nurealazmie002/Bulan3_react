import { ThemeProvider, ThemedButton, ThemedParagraph } from './components/ComplexState.jsx';
import Calculator from './components/TemperatureConverter.jsx';
import CounterWithReducer from './components/UseReducer.jsx';
import './App.css';

function App() {
  return (
    <>
      <div>
        <div>
          <Calculator />
        </div>

        <div>
          <CounterWithReducer />
        </div>

        <div className="text-center">
        <ThemeProvider>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contoh Context</h2>
          <ThemedButton />
          <ThemedParagraph />
        </ThemeProvider>
        </div>
      </div>
    </>
  );
}

export default App;
