/** @jsxImportSource @emotion/react */
"use client";

import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { css } from "@emotion/react";

import COLORS from "../../constants/colors";

const Styles = {
  root: css({
    boxShadow: `5px 0 5px -3px ${COLORS.boxShadow}`,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }),
  opened: css({
    width: "250px",
  }),
  closed: css({
    width: "50px",
  }),
  header: css({
    display: "flex",
    paddingTop: "15px",
  }),
  button: css({
    background: "none",
    border: "none",
    cursor: "pointer",
  }),
  icon: css({
    span: {
      height: "auto",
    },
  }),
  openIcon: css({
    justifyContent: "flex-end",
  }),
  closedIcon: css({
    justifyContent: "center",
  }),
  nav: css({
    padding: "20px",
  }),
  list: css({
    listStyle: "none",
  }),
  listItem: css({
    padding: "5px 0px",
  }),
  link: css({
    color: "black",
    fontSize: "24px",
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  }),
};

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
    <section css={[Styles.root, isOpen ? Styles.opened : Styles.closed]}>
      <header
        css={[Styles.header, isOpen ? Styles.openIcon : Styles.closedIcon]}
      >
        <button
          css={[Styles.button, Styles.icon]}
          onClick={() => onClickIcon()}
        >
          {isOpen ? (
            <Icon aria-label="Close navigation sidebar">
              <CloseIcon />
            </Icon>
          ) : (
            <Icon aria-label="Open navigation sidebar">
              <MenuIcon />
            </Icon>
          )}
        </button>
      </header>

      {isOpen && (
        <nav css={Styles.nav}>
          <ul css={Styles.list}>
            {items.map((item) => (
              <li
                key={item.text}
                className="roboto-medium"
                css={Styles.listItem}
              >
                <a css={Styles.link} href={item.link}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Sidebar;
