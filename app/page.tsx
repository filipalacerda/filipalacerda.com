import Image from "next/image";

import SocialIcons from "./components/socialIcons";
import ProfilePicture from "./images/filipa.jpg";

import "./styles/home.css";

export default function Home() {
  return (
    <div>
      <section className="home-page">
        <div className="profile-picture">
          <Image
            src={ProfilePicture}
            width={200}
            height={200}
            alt="Profile picture"
          />
        </div>

        <SocialIcons />
      </section>
    </div>
  );
}
