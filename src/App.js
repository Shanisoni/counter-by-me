import React, { useEffect, useState } from "react";

function App() {
  const [variable, setVariable] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleplus = () => {
    setLoading(true);
    setTimeout(() => {
      setVariable(variable + 1);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="font-medium text-2xl bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
        <div className="text-[#0398d4] font-medium text-2xl ">
          Increment & Decrement
        </div>

        <div>
          <button
            className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl "
            onClick={() => {
              setVariable(variable - 1);
            }}
          >
            -
          </button>
        </div>

        <div className="text-[#0398d4]  text-5xl  gap-12 font-bold ">
          {variable}
        </div>

        <div>
          <button
            className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl "
            onClick={handleplus}
          >
            +
          </button>
        </div>

        <button>
          <button
            className="text-white font-medium text-2xl bg-[#0398d4] px-5 py-2 rounded-sm text-lg "
            onClick={() => setVariable(0)}
          >
            Restart
          </button>
        </button>
      </div>
      {loading ? <div>Loading...</div> : ""}
    </div>
  );
}

export default App;
