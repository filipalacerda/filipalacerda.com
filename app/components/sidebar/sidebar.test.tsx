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

    it("should close when button is clicked", async () => {
      //Open the sidebar
      await userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Home")).toBeInTheDocument();
      // Close the sidebar
      await userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Home")).not.toBeInTheDocument();
    });
  });

  describe("when it is closed", () => {
    it("should not render the links", () => {
      expect(screen.getByText("Home")).not.toBeInTheDocument();
      expect(screen.getByText("Resume")).not.toBeInTheDocument();
      expect(screen.getByText("Talks")).not.toBeInTheDocument();
      expect(screen.getByText("Blog")).not.toBeInTheDocument();
    });
  });
});
