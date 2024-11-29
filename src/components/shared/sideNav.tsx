import React from "react";
import { PiRoadHorizon } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { PiAirplaneTilt } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { PiSuitcaseRolling } from "react-icons/pi";
import { PiFirstAidKit } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "activities",
    icon: <PiRoadHorizon size={29} />,
    href: "#Activities",
  },
  {
    name: "hotels",
    icon: <PiBuildings size={29} />,
    href: "#Hotels",
  },
  {
    name: "flights",
    icon: <PiAirplaneTilt size={29} />,
    href: "#Flights",
  },
  {
    name: "study",
    icon: <PiStudent size={29} />,
    href: "#Activities",
  },
  {
    name: "visa",
    icon: <PiNewspaperClipping size={29} />,
    href: "#Activities",
  },
  {
    name: "immigration",
    icon: <PiSuitcaseRolling size={29} />,
    href: "#Activities",
  },
  {
    name: "medical",
    icon: <PiFirstAidKit size={29} />,
    href: "#Activities",
  },
  {
    name: "vacation packages",
    icon: <PiPackage size={29} />,
    href: "#Activities",
  },
];

function SideNav() {
  return (
    <div className="fixed w-[22%] bg-white">
      <div className="absolute w-full min-h-full bg-white px-8 py-12 rounded-md">
        <ul className="list-none flex flex-col gap-8">
          {navItems.map(
            (
              {
                name,
                icon,
                href,
              }: { name: string; icon: React.ReactNode; href: string },
              index: number
            ) => (
              <Link
                to={href}
                className="flex hover:text-primary px-4 flex-row items-center gap-2  text-neutralText"
              >
                <span>{icon}</span>
                <p className="text-sm tracking-tighter capitalize">{name}</p>
              </Link>
            )
          )}
        </ul>
        <div className="bg-body mt-10 p-4 w-full rounded-md flex flex-row gap-2">
          <div className="bg-primary text-white p-2 rounded-md"> Go</div>
          <select className="bg-transparent focus:outline-none w-full text-sm capitalize tracking-tighter text-neutralText">
            <option>personal account</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
