import React from "react";
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
        <div className="w-full bg-white p-6 rounded-md">hello</div>
      </div>
    </section>
  );
}

export default Flights;
