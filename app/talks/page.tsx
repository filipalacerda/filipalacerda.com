"use client";
import TalksCard from "../components/talks_card";
import { talks } from "./data";

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
    </section>
  );
}
