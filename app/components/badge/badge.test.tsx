import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Badge from ".";

describe(Badge.name, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<Badge name="React" backgroundColor="" />).container;
  });

  it("should match snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  it("renders the provided name", () => {
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
