"use client";
import dynamic from "next/dynamic";
import TalksCard from "../components/talks_card";
import GeneralCard from "../components/general_card";

const Tabs = dynamic(() => import("../components/tabs"), {
  ssr: false,
});

import { talks, podcasts, blogPosts, code } from "./data";

export default function Talks() {
  return (
    <section className="mt-12  md:w-5/12 md:mx-auto">
      <Tabs
        tabs={[
          {
            title: "Talks",
            anchor: "talks",
            id: "talks",
            content: talks.map((talk) => (
              <TalksCard
                key={talk.title}
                title={talk.title}
                conference={talk.conference}
                date={talk.date}
                slidesURL={talk.slidesURL}
                youtube={talk.youtube}
              />
            )),
          },
          {
            title: "Podcasts",
            anchor: "podcasts",
            id: "podcasts",
            content: podcasts.map((podcast) => (
              <GeneralCard
                key={podcast.name}
                title={podcast.name}
                href={podcast.href}
              />
            )),
          },
          {
            title: "Blog posts",
            anchor: "posts",
            id: "blog-posts",
            content: blogPosts.map((blogPost) => (
              <GeneralCard
                key={blogPost.title}
                title={blogPost.title}
                href={blogPost.href}
              />
            )),
          },
          {
            title: "Code",
            anchor: "code",
            id: "code",
            content: code.map((object) => (
              <div key={object.name} className="mt-10">
                <h3 className="text-2xl font-bold">{object.name}</h3>
                <iframe src={object.src} width="100%" height="600"></iframe>
              </div>
            )),
          },
        ]}
      />
    </section>
  );
}
