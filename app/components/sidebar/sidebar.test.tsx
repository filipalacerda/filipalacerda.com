import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import Sidebar from "./index";

describe(Sidebar.name, () => {
  const items = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/resume",
      text: "Resume",
    },
    {
      link: "/talks",
      text: "Talks",
    },
    {
      link: "/blog",
      text: "Blog",
    },
  ];

  let container: HTMLElement;
  beforeEach(() => {
    container = render(<Sidebar items={items} />).container;
  });
  describe("when component renders", () => {
    it("should match snapshot", () => {
      expect(container).toMatchSnapshot();
    });
  });

  describe("when it is opened", () => {
    it("should render the links", async () => {
      await userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Resume")).toBeInTheDocument();
      expect(screen.getByText("Talks")).toBeInTheDocument();
      expect(screen.getByText("Blog")).toBeInTheDocument();
    });
  });
});
