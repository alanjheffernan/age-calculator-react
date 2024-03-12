import Input from "./Input";
import arrowIcon from "../assets/images/icon-arrow.svg";
import Output from "./Output";
import { useState } from "react";
import * as data from "../constants/constants";

function Calculator() {
  const [day, setDay] = useState(data.initialDayState);

  const handleDayChange = (newValue) => {
    const isValid = newValue < 31 && newValue > 0;
    
      setDay({
        ...day,
        error: !isValid,
      });

    }
  

  return (
    <main className="rounded-bl-3xl rounded-br-[100px] rounded-tl-3xl rounded-tr-3xl bg-white px-6 py-12 md:w-[728px]">
      <form>
        <div className="mb-8 flex gap-4">
          <Input state={day} onChange={handleDayChange}/>
          {/* <Input />
          <Input /> */}
        </div>
        <div className="relative mb-8 flex items-center justify-center md:justify-end">
          <button
            type="submit"
            className=" bg-purple hover:bg-off-black group z-10 rounded-full p-6 transition duration-300"
          >
            <img
              src={arrowIcon}
              alt="arrow-icon"
              className="bg-purple group-hover:bg-off-black h-6 w-6 transition duration-300"
            />
          </button>
          <div className="bg-light-grey absolute z-0 h-[1px] w-full"></div>
        </div>
      </form>
      <div className="flex flex-col">
        <Output />
        <Output />
        <Output />
      </div>
    </main>
  );
}

export default Calculator;
