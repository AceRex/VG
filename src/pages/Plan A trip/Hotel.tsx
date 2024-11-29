import React from "react";
import { PiBuildings } from "react-icons/pi";

function Hotels() {
  return (
    <section id="Hotels" className="bg-dark w-full rounded-md p-6 my-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 my-4">
          <PiBuildings size={25} className="text-white" />
          <p className="tracking-tighter text-white font-semibold">Hotels</p>
        </div>
        <div className="w-[15%]">
          <button className="bg-white w-full p-3 capitalize text-xs text-dark rounded-md">
            Add hotel
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-4">
        <div className="w-full bg-white p-6 rounded-md">hello</div>
      </div>
    </section>
  );
}

export default Hotels;
