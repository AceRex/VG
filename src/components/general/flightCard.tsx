import React from "react";
import { IoMdClose } from "react-icons/io";
import { PiSuitcaseRolling } from "react-icons/pi";
import { PiFilmSlateBold } from "react-icons/pi";
import { RiRestaurantLine } from "react-icons/ri";
import { PiUsbBold } from "react-icons/pi";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { PiAirplaneLandingBold } from "react-icons/pi";
// @ts-ignore
import Logo from "../../assets/image/Group.png";

function FlightCard() {
  return (
    <div className="flex flex-col gap-3 my-4">
      <div className="w-full flex flex-row bg-white rounded-md overflow-hidden">
        <div className="w-[95%] p-2 h-full">
          <div className="flex flex-row justify-between border-b border-body gap-3 p-3">
            <div className="w-[25%] flex flex-row items-center gap-2">
              <div className="h-7 w-7 object-contain">
                <img src={Logo} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-dark font-semibold tracking-tighter mb-1">
                  American Airlines
                </p>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-sm font-light text-dark text-wrap">
                    AA-829
                  </p>
                  <p className="">.</p>
                  <div className="bg-primaryDark rounded-md text-white text-xs p-1">
                    First Class
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] flex flex-row items-center">
              <div className="flex flex-col tracking-tighter text-right">
                <p className="text-lg font-semibold">08:35</p>
                <p className="text-xs text-neutralText">Sun, 20 Aug</p>
              </div>
              <div className="w-[70%] flex flex-col mx-3">
                <div className="flex flex-row justify-between">
                  <PiAirplaneTakeoffBold size={17} />
                  <p className="text-xs">Duration: 1h 45m</p>
                  <PiAirplaneLandingBold size={17} />
                </div>
                <div className="flex flex-row items-center my-3 rounded-md place-content-center overflow-hidden bg-primary/20 ">
                  <div className="bg-primary p-1 rounded-md w-[50%]"></div>
                </div>
                <div className="flex flex-row justify-between ">
                  <p className="text-xs font-semibold uppercase">LON</p>
                  <p className="text-xs">Direct</p>
                  <p className="text-xs font-semibold uppercase">SIN</p>
                </div>
              </div>
              <div className="flex flex-col  tracking-tighter text-left">
                <p className="text-lg font-semibold">09:55</p>
                <p className="text-xs text-neutralText">Sun, 20 Aug</p>
              </div>
            </div>
            <div className="w-[15%] flex flex-col text-right">
              <p className="text-xl text-dark tracking-tighter font-semibold">
                <span className="font-light">₦</span> 123,450.00
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 p-3 border-b border-body">
            <div className="flex flex-row items-center w-[80%] text-neutralText">
              <p className="text-xs mr-2">Facilities:</p>
              <div className="flex flex-row text-ellipsis items-center gap-2">
                <p className="flex flex-row items-center gap-1">
                  <PiSuitcaseRolling size={15} />{" "}
                  <span className="text-xs">
                    Baggage: 20kg, Cabin Baggage: 8kg
                  </span>
                </p>
                <p className="flex flex-row items-center gap-1">
                  <PiFilmSlateBold size={15} />{" "}
                  <span className="text-xs">In flight entertainment</span>
                </p>
                <p className="flex flex-row items-center gap-1">
                  <RiRestaurantLine size={15} />
                  <span className="text-xs">In flight meal</span>
                </p>
                <p className="flex flex-row items-center gap-1">
                  <PiUsbBold size={15} />
                  <span className="text-xs">USB Port</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 p-3">
            <div className="flex flex-row items-center gap-5">
              <p className="text-xs text-primary">Flight details</p>
              <p className="text-xs text-primary">Price details</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-xs text-primary">Edit details</p>
            </div>
          </div>
        </div>
        <div className="bg-accentRed h-full text-center w-[5%] py-[5.5rem] p-2">
          <div className="w-[80%] flex justify-center m-auto">
            <IoMdClose size={20} className="text-accentRedD" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
