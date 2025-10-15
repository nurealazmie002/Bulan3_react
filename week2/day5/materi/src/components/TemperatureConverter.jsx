import { useState } from "react";

function TemperatureInput({ temperature, onTemperatureChange, scale }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };


  const bgColor =
    scale === "c" ? "bg-green-100" : "bg-pink-100";
  const borderColor =
    scale === "c" ? "border-green-300" : "border-pink-300";

  return (
    <fieldset
      className={`w-64 p-4 m-3 border ${borderColor} ${bgColor} rounded-xl shadow-md`}
    >
      <legend className="font-bold text-gray-700 text-center">
        Input suhu {scaleNames[scale]}:
      </legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value, scale)}
        className="text-gray-500 w-full mt-2 p-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </fieldset>
  );
}


function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale("c");
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono bg-gradient-to-b from-blue-50 to-purple-50">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Pengubah Suhu
      </h2>

      <div className="flex flex-wrap justify-center">
        <TemperatureInput
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
          scale="c"
        />
        <TemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
          scale="f"
        />
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl shadow-md px-6 py-3 mt-6 text-gray-700">
        <p>Suhu dalam <b>Celsius:</b> {celsius}°C</p>
        <p>Suhu dalam <b>Fahrenheit:</b> {fahrenheit}°F</p>
      </div>
    </div>
  );
}

export default Calculator;
