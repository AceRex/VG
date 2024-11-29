import React from "react";
import { PiRoadHorizon } from "react-icons/pi";
import ActivityCard from "../../components/general/ActivityCard.tsx";

function Activities() {
  return (
    <section id="Activities" className="bg-primary w-full rounded-md p-6 my-2">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 my-4">
          <PiRoadHorizon size={25} className="text-white" />
          <p className="tracking-tighter font-semibold text-white">
            Activities
          </p>
        </div>
        <div className="w-[15%]">
          <button className="bg-white w-full p-3 capitalize text-xs text-primary rounded-md">
            Add Activities
          </button>
        </div>
      </div>

      <ActivityCard />
    </section>
  );
}

export default Activities;
