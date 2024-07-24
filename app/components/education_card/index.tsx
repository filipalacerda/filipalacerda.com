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
          className="text-green underline font-semibold text-md"
        >
          {title}
        </a>
      </h1>
      <p className="font-normal text-md">{school}</p>
      <p className="font-extralight text-xs">
        {date.from} - {date.to}
      </p>
    </div>
  );
};

export default EducationCard;
