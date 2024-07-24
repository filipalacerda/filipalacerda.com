type GeneralCardProps = {
  title: string;
  href: string;
};

const GeneralCard = ({ title, href }: GeneralCardProps) => {
  return (
    <section className="border rounded-sm p-4 mb-4 border-darkBlue">
      <a
        href={href}
        target="_blank"
        className="text-green underline text-md font-light"
      >
        {title}
      </a>
    </section>
  );
};

export default GeneralCard;
