import { useState } from "react";

const lengthUnits = {
  m: 1,
  km: 0.001,
  cm: 100,
  mm: 1000,
  inch: 39.3701,
  ft: 3.28084,
  mile: 0.000621371
};

export default function Unit() {
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");
  const [converted, setConverted] = useState(null);

  const convert = () => {
    const inMeters = value / lengthUnits[fromUnit];
    const result = inMeters * lengthUnits[toUnit];
    setConverted(result);
  };

  const unitOptions = Object.keys(lengthUnits);

  return (
    <div className="w-full max-w-[22rem] sm:max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg md:mb-40 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">📐 Unit Converter</h2>

      <div className="mb-4">
        <label className="block mb-1">Value:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">From:</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          >
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">To:</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          >
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={convert}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Convert
        </button>
      </div>

      {converted !== null && (
        <div className="text-center text-xl mt-4 font-medium">
          <p>
            {value} {fromUnit} ={" "}
            <span className="text-green-600">{converted.toFixed(4)} {toUnit}</span>
          </p>
        </div>
      )}
    </div>
  );
}
