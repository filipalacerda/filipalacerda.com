import JobCard from "../components/job_card";
import GitLabLogo from "../images/gitlab-logo-500.svg";

export default function Resume() {
  return (
    <section className="mt-12">
      <h1 className="text-4xl roboto-bold mb-4 m-auto flex justify-center text-darkBlue">
        Resume
      </h1>
      <section>
        <JobCard
          company={{
            name: "GitLab",
            url: "https://about.gitlab.com/",
            logo: GitLabLogo,
          }}
          date={{
            from: "September 2016",
            to: "December 2019",
          }}
          title="Senior Frontend Engineer"
          location="Remote"
          description="Refactored a jQuery-based application into Vuejs, and wrote the documentation for Vue patterns, flux state management, and Internal Styleguide for Vue. Developed several CI/CD features. Worked as a Release Manager for a couple of months."
        />
      </section>
    </section>
  );
}
