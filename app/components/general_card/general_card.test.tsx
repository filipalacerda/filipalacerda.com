import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import GeneralCard from ".";

describe(GeneralCard.name, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <GeneralCard title="Blog post title" href="custom.com" />,
    ).container;
  });

  it("should match snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  it("renders the provided title", () => {
    expect(screen.getByText("Blog post title")).toBeInTheDocument();
  });

  it("renders an external link", () => {
    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "custom.com");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
