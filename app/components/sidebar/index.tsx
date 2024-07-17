"use client";

import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

import useScreenSize from "../../hooks/useScreenSize";

import "./styles.css";

type SidebarProps = {
  items: {
    link: string;
    text: string;
  }[];
};

const isLinkActive = (href: string) => {
  return window.location.pathname === href;
};

/**
 * Renders a collapsible sidebar component
 * with the navigation links to the app
 */
const Sidebar = ({ items }: SidebarProps) => {
  const { width } = useScreenSize();

  // Check if it's Desktop size. The sidebar will only be opened by default on desktop
  const isDesktop = width >= 1240;

  const [isOpen, setIsOpen] = useState<boolean>(isDesktop ? true : false);

  return (
    <section
      className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <header className="sidebar-header">
        <button className="sidebar-icon" onClick={() => setIsOpen(!isOpen)}>
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
        <nav className="sidebar-nav">
          <ul>
            {items.map((item) => (
              <li
                key={item.text}
                className={`roboto-medium sidebar-link ${isLinkActive(item.link) && "active"}`}
              >
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Sidebar;
export { isLinkActive };
