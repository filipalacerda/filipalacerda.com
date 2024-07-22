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

          <section className="mt-6 text-center roboto-light text-md">
            <p>
              My name is Filipa Lacerda and I am a Senior Frontend Engineer.
            </p>
            <p className="mt-4">
              This is my personal website. Here you can find more about my work
              and my personal life!
            </p>
            <p className="mt-4">
              I havee been working remotely for the past 10 years and I felt in
              love with it! You can find more details about my experience{" "}
              <Link href="/resume" className="underline text-green">
                here.
              </Link>
            </p>
            <p className="mt-4">
              When I am not working, you can find me running, doing CrossFit at{" "}
              <a
                href="https://www.instagram.com/mare_box/"
                className="underline text-green"
              >
                @mare_box
              </a>
              , reading or cooking. On the{" "}
              <Link href="/blog" className="underline text-green">
                blog
              </Link>{" "}
              section you can also find about my DYI projects, recipes, travel
              journals and more.
            </p>
            <p className="mt-4">
              I am highly addicted to good coffee. I work from a{" "}
              <a
                href="https://www.instagram.com/portadocafe/"
                className="underline text-green"
              >
                Porta do Café
              </a>{" "}
              and on the blog you can find a list of my favourite coffees!
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
