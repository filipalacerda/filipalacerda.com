"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
        <button onClick={() => onClickIcon()}>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} size="xl" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" />
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
