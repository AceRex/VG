import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { PiUserPlusBold } from "react-icons/pi";
import { PiDotsThreeBold } from "react-icons/pi";
import SmallCard from "../../components/general/smallCard.tsx";
import Itenaries from "./Itenaries.tsx";

function PlanATrip() {
  return (
    <>
      <div className="h-[9rem] rounded-md bg-[#CFE9FF] hero relative">
        <div className="bg-white/40 p-2 absolute top-2 left-2 rounded-md">
          <MdOutlineKeyboardBackspace size={20} className="text-dark" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-between my-4">
        <div className="">
          <div className="bg-accent w-[32%] text-sm tracking-tighter flex flex-row gap-2 p-1 px-4 rounded-md items-center text-accentText">
            <FiCalendar />
            <p>21 March 2024</p>
            <RiArrowRightLine size={20} /> <p>21 March 2024</p>
          </div>
          <p className="text-3xl mt-2 font-semibold tracking-tighter">
            Bahamas Family Trip
          </p>
          <div className="flex flex-row items-center mb-3">
            <p className="text-sm pr-2 tracking-tighter">
              New York,  United States of America
            </p>
            <span className="text-sm pl-2 border-l-2 border-body tracking-tighter">
              Solo Trip
            </span>
          </div>
          <div className="w-[90%] flex flex-row gap-1">
            <SmallCard
              bgcolor="bg-dark"
              textColor="text-white"
              btnColor="bg-primary"
              heading="activities"
              btnText="Add activites"
            />
            <SmallCard
              bgcolor="bg-primary/20"
              textColor="text-dark"
              btnColor="bg-primary"
              heading="Hotels"
              btnText="Add Hotels"
              btnTextColor="text-white"
            />
            <SmallCard
              bgcolor="bg-primary"
              textColor="text-white"
              btnColor="bg-white"
              heading="Flights"
              btnText="Add Flights"
              btnTextColor="text-primary"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-primary/20 px-14 py-2 rounded-md">
            <PiUserPlusBold size={20} className="text-primary" />
          </div>
          <PiDotsThreeBold size={30} />
        </div>
      </div>
      <Itenaries />
    </>
  );
}

export default PlanATrip;
