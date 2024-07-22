type BadgeProps = {
  backgroundColor:
    | "#E76F51"
    | "#F4A261"
    | "#E9C46A"
    | "#2A9D8F"
    | "#264653"
    | string;
  textColor?: string;
  name: string;
};

const Badge = ({ backgroundColor, textColor = "white", name }: BadgeProps) => {
  return (
    <div
      className="rounded-lg text-xs w-fit p-1"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {name}
    </div>
  );
};

export default Badge;
