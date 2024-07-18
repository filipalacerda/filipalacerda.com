"use client";

import Image from "next/image";
import GitHubIcon from "../../images/github.svg";
import GitLabIcon from "../../images/gitlab.svg";
import LinkedinIcon from "../../images/linkedin.svg";
import EmailIcon from "../../images/envelope.svg";
import TwitterIcon from "../../images/twitter-x.svg";

const SocialIcons = () => {
  return (
    <div>
      <ul className="flex justify-between mt-10 m-auto w-60">
        <li>
          <a
            href="https://twitter.com/FilipaLacerda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={TwitterIcon}
              width={20}
              height={20}
              alt="Twitter profile"
            />
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/filipa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GitLabIcon}
              width={20}
              height={20}
              alt="GitLab profile"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/filipalacerda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={GitHubIcon}
              width={20}
              height={20}
              alt="GitHub profile"
            />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/filipalacerda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedinIcon}
              width={20}
              height={20}
              alt="Linkedin profile"
            />
          </a>
        </li>
        <li>
          <a href="mailto:lacerda.filipa@gmail.com">
            <Image src={EmailIcon} width={20} height={20} alt="Email link" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
