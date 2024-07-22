type EducationCardProps = {
  school: string;
  title: string;
  date: {
    from: number;
    to: number;
  };
  externalUrl: string;
};

const EducationCard = ({
  title,
  school,
  date,
  externalUrl,
}: EducationCardProps) => {
  return (
    <div className="mb-4 p-4 border rounded-sm border-darkBlue">
      <h1>
        <a
          href={externalUrl}
          className="text-green underline roboto-bold text-md"
        >
          {title}
        </a>
      </h1>
      <p className="roboto-regular text-md">{school}</p>
      <p className="roboto-thin text-xs">
        {date.from} - {date.to}
      </p>
    </div>
  );
};

export default EducationCard;
