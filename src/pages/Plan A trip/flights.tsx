import React from "react";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import FlightCard from "../../components/general/flightCard.tsx";

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

      <FlightCard />
    </section>
  );
}

export default Flights;
