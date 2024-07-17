"use client";

import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./styles.css";

type SidebarProps = {
  items: {
    link: string;
    text: string;
  }[];
  isOpen: boolean;
  onClickIcon: () => void;
};

const Sidebar = ({ isOpen, onClickIcon, items }: SidebarProps) => {
  return (
    <section
      className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <header className="sidebar-header">
        <button className="sidebar-icon" onClick={() => onClickIcon()}>
          {isOpen ? (
            <Icon>
              <CloseIcon />
            </Icon>
          ) : (
            <Icon>
              <MenuIcon />
            </Icon>
          )}
        </button>
      </header>

      {isOpen && (
        <nav className="sidebar-nav">
          <ul>
            {items.map((item) => (
              <li key={item.text} className={`roboto-medium sidebar-link`}>
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
