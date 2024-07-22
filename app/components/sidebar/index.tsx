"use client";

import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import useScreenSize from "../../hooks/useScreenSize";

import "./styles.css";

type SidebarProps = {
  items: {
    link: string;
    text: string;
  }[];
};

/**
 * Renders a collapsible sidebar component
 * with the navigation links to the app
 */
const Sidebar = ({ items }: SidebarProps) => {
  //const { width } = useScreenSize();

  // Check if it's Desktop size. The sidebar will only be opened by default on desktop
  //const isDesktop = width >= 1240;

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const currentPath = usePathname();

  return (
    <section
      className={`absolute bg-white flex flex-col z-10 h-full sidebar ${isOpen ? "w-60" : "w-12"}`}
    >
      <header
        className={`flex relative pt-4 justify-end ${isOpen ? "pr-4" : "pr-3.5"}`}
      >
        <button
          className="sidebar-icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar Visibility"
        >
          {isOpen ? (
            <Icon aria-label="Close navigational sidebar">
              <CloseIcon />
            </Icon>
          ) : (
            <Icon aria-label="Open navigational sidebar">
              <MenuIcon />
            </Icon>
          )}
        </button>
      </header>

      {isOpen && (
        <nav className="px-5 py-5">
          <ul>
            {items.map((item) => (
              <li
                key={item.text}
                className={`roboto-medium hover:underline text-2xl uppercase py-1.5 ${currentPath === item.link && "text-orangeDark underline"}`}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Sidebar;
