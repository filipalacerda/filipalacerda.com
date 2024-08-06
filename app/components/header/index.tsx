"use client";

import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderProps = {
  navItems: {
    href: string;
    text: string;
  }[];
};

const Header = ({ navItems }: HeaderProps) => {
  const currentPath = usePathname();
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hideNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed left-0 right-0 bg-white z-10">
      <nav className="flex justify-end items-center h-24 mx-auto px-4 text-white font-roboto">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.text}
              className={`p-4 m-2 cursor-pointer text-[#151817] text-nowrap text-lg font-bold uppercase ${
                currentPath === item.href &&
                "underline text-orangeDark font-semibold"
              }`}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div className="block md:hidden text-[#151817]">
          {!nav && (
            <button onClick={handleNav}>
              <Icon aria-label="Open navigational sidebar">
                <MenuIcon />
              </Icon>
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-border bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="items-center flex">
            <button onClick={handleNav} className="p-2.5 text-[#151817]">
              <Icon aria-label="Close navigational sidebar">
                <CloseIcon />
              </Icon>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.text}
              className={`p-4 duration-300 hover:text-black cursor-pointer text-[#151817] text-lg font-bold uppercase ${
                currentPath === item.href &&
                "underline text-orangeDark font-semibold"
              }`}
              onClick={() => hideNav()}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
