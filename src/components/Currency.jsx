import { useEffect, useState } from "react";

const Currency = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${from}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch(() => setRates({}));
  }, [from]);

  const convert = () => {
    if (!amount || isNaN(amount)) return setResult("Enter a valid number.");
    const rate = rates[to];
    if (!rate) return setResult("Conversion not available.");
    setResult((amount * rate).toFixed(2));
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-[22rem] sm:max-w-md mx-auto mt-10 mb-20 md:mb-50">
      <h2 className="text-xl font-poppins mb-4">💱 Currency Converter</h2>

      <input
        type="number"
        className="w-full mb-3 p-2 border rounded"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex gap-2 mb-3">
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 border rounded w-full">
          {Object.keys(rates).map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="p-2 border rounded w-full">
          {Object.keys(rates).map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <button onClick={convert} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Convert
      </button>

      {result && <p className="mt-4 text-lg font-semibold text-center">Result: {result} {to}</p>}
    </div>
  );
};

export default Currency;