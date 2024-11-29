import React from "react";
import { IoMdClose } from "react-icons/io";
import { PiAirplaneInFlightBold } from "react-icons/pi";

function Flights() {
  return (
    <section id="Flights" className="bg-body w-full rounded-md p-6 my-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 my-4">
          <PiAirplaneInFlightBold size={25} />
          <p className="tracking-tighter font-semibold">Flights</p>
        </div>
        <div className="w-[15%]">
          <button className="bg-white w-full p-3 capitalize text-xs text-primary rounded-md">
            Add flight
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-4">
        <div className="w-full flex flex-row items-center bg-white rounded-md overflow-hidden">
          <div className="w-[20%] p-4">
            <img src="" alt="" />
          </div>
          <div className="w-[75%]"></div>
          <div className="bg-accentRed w-[5%] flex items-center place-content-center justify-center p-2">
            <IoMdClose size={20} className="text-accentRedD" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flights;
