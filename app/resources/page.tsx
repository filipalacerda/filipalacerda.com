"use client";
import TalksCard from "../components/talks_card";
import GeneralCard from "../components/general_card";
import { talks, podcasts, blogPosts } from "./data";

export default function Talks() {
  return (
    <section className="mt-12">
      {talks.map((talk) => (
        <TalksCard
          key={talk.title}
          title={talk.title}
          conference={talk.conference}
          date={talk.date}
          slidesURL={talk.slidesURL}
          youtube={talk.youtube}
        />
      ))}

      <section>
        {podcasts.map((podcast) => (
          <GeneralCard
            key={podcast.name}
            title={podcast.name}
            href={podcast.href}
          />
        ))}
      </section>

      <section>
        {blogPosts.map((blogPost) => (
          <GeneralCard
            key={blogPost.title}
            title={blogPost.title}
            href={blogPost.href}
          />
        ))}
      </section>
    </section>
  );
}
