"use client";
import TalksCard from "../components/talks_card";

export default function Talks() {
  return (
    <section className="mt-12">
      <TalksCard
        title="GitLab's journey With Vue - from jQuery to GraphQL"
        conference="Connect Fest Porto, Portugal"
        date="September 5th, 2019"
        slidesURL="https://slides.com/filipalacerda/deck-7/"
      />

      <TalksCard
        title="Workshop CI/CD como ferramenta de Devops"
        conference="DETI, Aveiro, Portugal"
        date="April 25, 2019"
        slidesURL="https://slides.com/filipalacerda/devops-glua/"
      />

      <TalksCard
        title="Vuex Patterns: Why actions matter"
        conference="Vuejs Amsterdam, Netherlands"
        date="February 14-15, 2019"
        slidesURL="https://slides.com/filipalacerda/devops-glua/"
        youtube={{
          id: "XKwx56Keh2c&t",
          title: "Why actions matter",
        }}
      />

      <TalksCard
        title="Beyond Agile - Conversational Development at GitLab"
        conference="GDG DevFest Lisboa, Portugal"
        date="December 8, 2018"
        slidesURL="https://slides.com/filipalacerda/deck-4"
      />

      <TalksCard
        title="Vue and Vuex: The good, the bad and the ugly - GitLab's use case"
        conference="GDG DevFest Coimbra, Portugal"
        date="November 24, 2018"
        slidesURL="https://slides.com/filipalacerda/deck-2-3"
      />

      <TalksCard
        title="Vue and Vuex: The good, the bad and the ugly"
        conference="Vue Conf TO, Toronto, Canada"
        date="November 14-16, 2018"
        slidesURL="https://slides.com/filipalacerda/deck-2"
        youtube={{
          id: "LVklxTbBPj4",
          title: "Vue and Vuex",
        }}
      />

      <TalksCard
        title="An overvue a tale of speed and maintainability"
        conference="Commit Porto, Portugal"
        date="June 30, 2018"
        slidesURL="https://slides.com/filipalacerda/deck"
        youtube={{
          id: "KCBGtkO9fgY",
          title: "An overvue a tale of speed and maintainability",
        }}
      />

      <TalksCard
        title="Vuejs made my life easier"
        conference="require('lx') - The JavaScript meetup in Lisbon, Portugal"
        date="February 21, 2018"
      />

      <TalksCard
        title="One Tool for Software Development"
        conference="Semana da Engenharia Informática, Braga Portugal"
        date="February 3-11, 2018"
      />

      <TalksCard
        title="GitLab CI/CD - An overview"
        conference="DevOps Porto, Portugal"
        date="June 21-23, 2017"
      />

      <TalksCard
        title="No time to refactor, how we made the Frontend awesome at GitLab with Vue.js"
        conference="Vue Conf WROCLAW, Poland"
        date="June 21-23, 2017"
        youtube={{
          id: "-69tKcl1oTE",
          title:
            "No time to refactor, how we made the Frontend awesome at GitLab with Vue.js",
        }}
      />
    </section>
  );
}
