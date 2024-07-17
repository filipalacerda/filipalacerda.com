import Image from "next/image";
import ProfilePicture from "./images/filipa.jpg";

export default function Home() {
  return (
    <div>
      <section className="content">
        Home page
        <Image
          src={ProfilePicture}
          width={200}
          height={200}
          alt="Profile picture"
        />
      </section>
    </div>
  );
}
