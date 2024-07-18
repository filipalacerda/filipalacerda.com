import Image from "next/image";
import Link from "next/link";

import SocialIcons from "./components/socialIcons";
import ProfilePicture from "./images/filipa.jpg";

import "./styles/home.css";

export default function Home() {
  return (
    <div>
      <section className="home-page">
        <div className="profile-picture flex justify-center">
          <Image
            src={ProfilePicture}
            width={200}
            height={200}
            alt="Profile picture"
          />
        </div>

        <SocialIcons />

        <div className="m-auto mt-10">
          <h1 className="roboto-bold text-2xl flex justify-center text-darkBlue">
            Welcome!
          </h1>

          <section className="mt-6 text-center">
            <p className="roboto-light text-md">
              My name is Filipa Lacerda and I'm a Senior Frontend Engineer.
            </p>
            <p className="roboto-light text-md mt-4">
              This is my personal website, built from scratch with Next.js. Here
              you can find more about my work and my personal life!
            </p>
            <p className="roboto-light text-md mt-4">
              I've been working remotely for the past 10 years and I felt in
              love with it! You can find more details about my experience{" "}
              <Link href="/resume" className="underline text-green">
                here.
              </Link>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
