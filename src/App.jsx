import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiCal, setBmiCal] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (weight === 0 || height === 0) {
      alert("please enter right weight and height !!");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmiCal(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are Underweight !");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight !");
      } else {
        setMessage("You are Overweight !");
      }
    }
  };

  const handleReload = () => {
    setHeight("");
    setWeight("");
    setBmiCal("");
    setMessage("");
  };

  return (
    <>
      <div className="border-4 w-[320px] m-auto mt-20 mb-12 flex flex-col items-center gap-5 shadow pt-3 pb-9">
        <p className="font-bold text-xl text-[darkblue]">BMI Calculator</p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Weight (lbs)
            </label>
            <input
              type="text"
              value={weight}
              placeholder="Enter Weight Value"
              className="border-2 p-1 rounded shadow w-[250px] border-gray-300"
              name=""
              id=""
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Height (in)
            </label>
            <input
              type="text"
              value={height}
              placeholder="Enter Height Value"
              className="border-2 p-1 rounded shadow border-gray-300"
              name=""
              id=""
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <button
              type="submit"
              className="font-semibold bg-blue-500 py-[6px] text-white rounded border-2"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className=" font-semibold bg-gray-300 py-1 rounded border-2 border-gray-300 text-gray-700"
              onClick={handleReload}
            >
              Reload
            </button>
          </div>
        </div>
        <div className="">
          <p className="font-semibold ">Your BMI is : {bmiCal}</p>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default App;
