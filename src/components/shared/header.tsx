import React, { useState } from "react";
// @ts-ignore
import Logo from "../../assets/image/GO ICON WHITE 1.png";
// @ts-ignore
import userImage from "../../assets/image/userImage.jpeg";
import { IoSearchOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { AiOutlinePieChart } from "react-icons/ai";
import { PiWalletLight } from "react-icons/pi";
import { TbListCheck } from "react-icons/tb";
import { PiHandCoins } from "react-icons/pi";
import { PiBell } from "react-icons/pi";
import { PiBasket } from "react-icons/pi";
import { FiPlusSquare } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const quickLinks = [
  { name: "Home", href: "/home", icon: <GoHome size={18} /> },
  { name: "Dashboard", href: "/", icon: <AiOutlinePieChart size={18} /> },
  { name: "Wallet", href: "/", icon: <PiWalletLight size={18} /> },
  {
    name: "plan a trip",
    href: "/plan-a-trip",
    icon: <TbListCheck size={18} />,
  },
  { name: "commission for life ", href: "/", icon: <PiHandCoins size={18} /> },
];
const otherLinks = [
  { name: "notification", href: "#", icon: <PiBell size={18} /> },
  { name: "cart", href: "#", icon: <PiBasket size={18} /> },
  { name: "create", href: "#", icon: <FiPlusSquare size={18} /> },
];

function Header() {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-white w-full relative p-3 flex flex-row items-center place-content-center px-8">
      <div className="flex flex-row gap-3 lg:w-2/6 w-[95%]">
        <div className="bg-primary flex items-center w-10 h-10 p-1 object-center object-cover overflow-hidden rounded-md">
          <img src={Logo} alt="logo" />
        </div>
        <div className="bg-body rounded-md w-80 px-4 flex flex-row gap-3 items-center">
          <IoSearchOutline size={20} className="text-neutralText" />
          <input
            type="search"
            className="bg-transparent w-[90%] m-auto text-neutralText placeholder:text-neutralText placeholder:text-xs focus:outline-none tracking-tighter"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="lg:flex hidden flex-row items-center place-content-center justify-between gap-4 w-4/6">
        <ul className="flex flex-row w-1/2 items-center place-content-center justify-between gap-4 px-4 border-r border-neutralText">
          {quickLinks.map(
            (
              {
                name,
                href,
                icon,
              }: { name: string; href: string; icon: React.ReactNode },
              index: number
            ) => (
              <NavLink
                to={href}
                key={index}
                className={({ isActive }) =>
                  `flex hover:text-dark flex-col gap-2 tracking-tight items-center place-content-center ${
                    isActive ? "text-dark" : "text-neutralText"
                  }`
                }
              >
                {icon}
                <p className="capitalize text-xs">{name}</p>
              </NavLink>
            )
          )}
        </ul>
        <ul className="flex flex-row w-1/2 items-center place-content-center justify-between gap-4 px-4">
          <button className="bg-primary text-white capitalize p-2 h-10 rounded-md px-4 text-xs">
            subscribe
          </button>
          {otherLinks.map(
            (
              {
                name,
                href,
                icon,
              }: { name: string; href: string; icon: React.ReactNode },
              index: number
            ) => (
              <Link
                to={href}
                key={index}
                className="flex flex-col gap-2 tracking-tight items-center place-content-center  text-neutralText"
              >
                {icon}
                <p className="capitalize text-xs">{name}</p>
              </Link>
            )
          )}
          <div className="flex flex-row justify-center gap-2 items-center ">
            <div className="bg-primary rounded-full object-cover object-left-top overflow-hidden text-white capitalize w-10 h-10 text-xs">
              <img src={userImage} alt="pp" className="w-[100%]" />
            </div>
            <GoChevronDown />
          </div>
        </ul>
      </div>
      <div className="lg:hidden px-4 w-[5%]">
        {openMenu ? (
          <RxHamburgerMenu size={20} onClick={handleOpenMenu} />
        ) : (
          <IoClose size={20} onClick={handleOpenMenu} />
        )}
        <div
          className={`absolute ${
            openMenu ? "translate-x-0" : "translate-x-[100%]"
          } w-full p-8 left-0 top-20 bg-white transition delay-300 ease-in-out`}
        >
          <div className="flex flex-row justify-center gap-2 items-center mb-5">
            <div className="bg-primary rounded-full object-cover object-left-top overflow-hidden text-white capitalize w-20 h-20 text-xs">
              <img src={userImage} alt="pp" className="w-[100%]" />
            </div>
            <GoChevronDown />
          </div>
          <ul className="flex flex-col w-full gap-6">
            {quickLinks.map(
              (
                {
                  name,
                  href,
                  icon,
                }: { name: string; href: string; icon: React.ReactNode },
                index: number
              ) => (
                <Link
                  to={href}
                  key={index}
                  className="flex flex-row gap-4 tracking-tight  text-neutralText"
                >
                  {icon}
                  <p className="capitalize text-xs">{name}</p>
                </Link>
              )
            )}
          </ul>
          <ul className="flex flex-col w-full gap-6 py-6">
            <button className="bg-primary text-white capitalize p-2 h-10 rounded-md text-xs">
              subscribe
            </button>
            {otherLinks.map(
              (
                {
                  name,
                  href,
                  icon,
                }: { name: string; href: string; icon: React.ReactNode },
                index: number
              ) => (
                <Link
                  to={href}
                  key={index}
                  className="flex flex-row gap-4 tracking-tight  text-neutralText"
                >
                  {icon}
                  <p className="capitalize text-xs">{name}</p>
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
