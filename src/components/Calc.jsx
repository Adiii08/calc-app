import { useState,useEffect } from "react";
const Calc = () => {
   const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      const validKeys = "0123456789+-*/.";
      if (validKeys.includes(e.key)) {
        handleClick(e.key);
      } else if (e.key === "Enter") {
        handleCalculate();
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.toLowerCase() === "c") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  

  return (
    <div className="bg-slate-500 w-full max-w-[22rem] mx-auto border-2 shadow-xl mt-8 rounded-xl px-4 py-4 mb-10">
      <input 
      className="w-full font-bold px-10 py-5 bg-white mb-5 text-xl rounded-xl text-center"
      type="text"
      value={input}
      readOnly
      />
      <div className="grid grid-cols-4 gap-2 shadow-xl">
        
        {[
          "7","8","9","/",
          "4","5","6","*",
          "1","2","3","-",
          "0",".","=","+"
        ].map((item)=>(
          <button 
           key={item}
           className="p-6 bg-black text-white text-xl hover:bg-gray-400 hover:text-black duration-300 rounded-[50%] "
           onClick={()=>item === "=" ? handleCalculate() : handleClick(item)}>
            {item}
           </button>
        ))}
         <button
          className="col-span-4 p-3 bg-red-200 rounded hover:bg-red-300"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
    className="col-span-2 p-3 bg-black rounded text-white hover:text-black hover:bg-gray-300 duration-300 text-lg"
    onClick={() => {
      setInput("");
      setError("");
    }}
  >
    AC
  </button>

         <button
    className="col-span-2 p-3 bg-black rounded text-white hover:text-black hover:bg-gray-300 duration-300 text-lg"
    onClick={() => setInput((prev) => prev.slice(0, -1))}
  >
    DEL
  </button>


      </div>
    </div>
  )
}

export default Calc;
