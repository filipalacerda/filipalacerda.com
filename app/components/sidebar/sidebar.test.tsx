import { render, screen } from "@testing-library/react";

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
  describe("when component renders", () => {
    it("should match snapshot", () => {
      const { container } = render(<Sidebar items={items} />);
      expect(container).toMatchSnapshot();
    });
  });
});
