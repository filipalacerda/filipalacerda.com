"use client";
import dynamic from "next/dynamic";
import TalksCard from "../components/talks_card";
import GeneralCard from "../components/general_card";
import CodeBlock from "../components/code_block";

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
              <CodeBlock
                key={object.name}
                name={object.name}
                github={object.github}
                src={object.src}
              />
            )),
          },
        ]}
      />
    </section>
  );
}
