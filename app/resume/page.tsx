import JobCard from "../components/job_card";
import Badge from "../components/badge";
import { jobs, skills } from "./data";

export default function Resume() {
  return (
    <section className="mt-12 md:w-5/12 md:mx-auto">
      <section className="flex flex-wrap justify-between gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            name={skill.name}
            backgroundColor={skill.backgroundColor}
          />
        ))}
      </section>
      <section>
        {jobs.map((job) => (
          <JobCard
            key={job.company.name}
            company={{
              name: job.company.name,
              url: job.company.url,
              logo: job.company.logo,
            }}
            date={{
              from: job.date.from,
              to: job.date.to,
            }}
            title={job.title}
            location={job.location}
            description={job.description}
          />
        ))}
      </section>
    </section>
  );
}
