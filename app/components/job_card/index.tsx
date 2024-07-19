"use client";
import { useState } from "react";
import Image from "next/image";

import Icon from "@mui/material/Icon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type JobCardProps = {
  company: {
    name: string;
    url: string;
    logo: string;
  };
  title: string;
  date: {
    from: string;
    to: string;
  };
  description: string;
  location: string;
};

const JobCard = ({
  company,
  date,
  description,
  title,
  location,
}: JobCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  return (
    <div className="border border-darkBlue rounded flex py-2 px-2 flex flex-col mt-4">
      <div className="section-top flex flex-col">
        <div className="card flex justify-between">
          <div className="header">
            <h1 className="text-2xl roboto-bold underline text-green">
              <a href={company.url}>{company.name}</a>
            </h1>
            <h2 className="text-lg roboto-bold mt-2">{title}</h2>
            <p className="roboto-light text-xs mt-2">
              {date.from} - {date.to}
            </p>
            <span className="roboto-light text-xs mt-2">{location}</span>
          </div>
          <div className="mt-2.5 mr-3.5">
            <Image
              src={company.logo}
              width={100}
              height={100}
              alt={`${company.name} logo`}
            />
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Read more"
        >
          <Icon aria-label="Toggle description icon">
            {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </Icon>
        </button>
      </div>

      {!isCollapsed && <div className="roboto-light mt-4">{description}</div>}
    </div>
  );
};

export default JobCard;
