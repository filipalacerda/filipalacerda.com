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
      <header className="header">
        <button onClick={() => onClickIcon()}>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" />
          )}
        </button>
      </header>

      {isOpen && (
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.text}>
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
