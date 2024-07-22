import JobCard from "../components/job_card";
import jobs from "./data";

export default function Resume() {
  return (
    <section className="mt-12">
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
