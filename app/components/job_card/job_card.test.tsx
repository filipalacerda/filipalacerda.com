import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import JobCard from "./index";
import jobs from "../../resume/data";

describe(JobCard.name, () => {
  let container: HTMLElement;

  const job = jobs[0];

  beforeEach(() => {
    container = render(
      <JobCard
        company={job.company}
        title={job.title}
        date={job.date}
        description={job.description}
        location={job.location}
      />,
    ).container;
  });

  it("should match snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  it("should render company name", () => {
    expect(screen.getByText(job.company.name)).toBeInTheDocument();
  });

  it("should render title", () => {
    expect(screen.getByText(job.title)).toBeInTheDocument();
  });

  it("should render date", () => {
    expect(screen.getByText(job.date.from)).toBeInTheDocument();
    expect(screen.getByText(job.date.to)).toBeInTheDocument();
  });

  it("should render the logo", () => {
    expect(
      screen.getAllByAltText(`${job.company.name} logo`),
    ).toBeInTheDocument();
  });

  it("should not render description by default", () => {
    expect(screen.getByText(job.description)).not.toBeInTheDocument();
  });

  it("should render description when the user clicks read more", async () => {
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText(job.description)).toBeInTheDocument();
  });
});
