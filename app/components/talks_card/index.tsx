import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type TalksCardProps = {
  title: string;
  slidesURL?: string;
  youtube?: {
    id: string;
    title: string;
  };
  date: string;
  conference?: string;
};

const TalksCard = ({
  title,
  slidesURL,
  youtube,
  date,
  conference,
}: TalksCardProps) => {
  return (
    <section className="mb-4 p-4 border rounded-sm border-darkBlue">
      <h1 className="text-md font-bold mb-2">{title}</h1>

      {slidesURL && (
        <p className="text-sm font-light mb-4">
          Slides can be found{" "}
          <a href={slidesURL} className="text-green underline">
            here.
          </a>
        </p>
      )}

      <p className="text-sm">{conference && conference}</p>

      <p className="text-sm">{date}</p>

      {youtube && (
        <div className="mt-4">
          <LiteYouTubeEmbed
            id={youtube.id}
            title={youtube.title}
            params="t=5s"
          />
        </div>
      )}
    </section>
  );
};

export default TalksCard;
