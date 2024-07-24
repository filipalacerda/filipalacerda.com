import GitLabLogo from "../images/gitlab-logo-500.svg";
import LivelyLogo from "../images/logo-lively.svg";
import ZapierLogo from "../images/zapier-logo_black.png";
import TheNewDigitalSchoolLogo from "../images/the_new_digital_school.jpeg";
import FeedzaiLogo from "../images/feedzai_logo.svg";
import MaisisLogo from "../images/maisis_logo.jpeg";
import iUZlogo from "../images/iuz_logo.jpeg";

const jobs = [
  {
    company: {
      name: "Lively",
      url: "https://livelyme.com/",
      logo: LivelyLogo,
    },
    date: {
      from: "May 2024",
      to: "Present",
    },
    title: "Senior Frontend Engineer",
    location: "Remote",
    description:
      "Worked on fixing technical debt, from creating semantic tokens for the design system reusable components to adding more than 600 unit tests to components that didn't have any. Worked on fixing acessibility errors by implementing acessibility unit tests and enable Storybook acessibility checks.",
  },
  {
    company: {
      name: "Zapier",
      url: "https://zapier.com/",
      logo: ZapierLogo,
    },
    date: {
      from: "December 2020",
      to: "May 2024",
    },
    title: "Senior Frontend Engineer",
    location: "Remote",
    description:
      "Worked closely with developers who built their product's API to integrate with Zapier. Worked on the Design System team, creating and maintaing components for the whole company to use. Migrated all the components from Styleguidist to Storybook, allowing for acessibility testing.",
  },
  {
    company: {
      name: "GitLab",
      url: "https://about.gitlab.com/",
      logo: GitLabLogo,
    },
    date: {
      from: "September 2016",
      to: "December 2019",
    },
    title: "Senior Frontend Engineer",
    location: "Remote",
    description:
      "Refactored a jQuery-based application into Vuejs, and wrote the documentation for Vue patterns, flux state management, and Internal Styleguide for Vue. Developed several CI/CD features. Worked as a Release Manager for a couple of months.",
  },
  {
    company: {
      name: "The New Digital School",
      url: "https://www.linkedin.com/company/the-new-digital-school/",
      logo: TheNewDigitalSchoolLogo,
    },
    date: {
      from: "July 2018",
      to: "December 2018",
    },
    title: "Mentor",
    location: "Remote",
    description: "Frontend Mentorship - Coaching students",
  },
  {
    company: {
      name: "Feedzai",
      url: "https://feedzai.com/",
      logo: FeedzaiLogo,
    },
    date: {
      from: "January 2015",
      to: "September 2016",
    },
    title: "Frontend Developer",
    location: "Portugal",
    description:
      "Built the Frontend for a fraud prevention product using React, Redux & Webpack. Built the Frontend for several clients, on-site.",
  },
  {
    company: {
      name: "Maisis",
      url: "https://www.linkedin.com/company/maisis---information-systems-lda/about/",
      logo: MaisisLogo,
    },
    date: {
      from: "March 2013",
      to: "December 2014",
    },
    title: "Frontend Developer",
    location: "Aveiro, Portugal",
    description:
      "Developed the client side of some projects with ember.js, javascript, jQuery, HTML5, CSS3 and using REST APIs; Including the development of the user experience interface. Worked with Agile Methodologies.",
  },
  {
    company: {
      name: "iUZ Technologies",
      url: "https://www.linkedin.com/company/iuz-technologies/about/",
      logo: iUZlogo,
    },
    date: {
      from: "November 2011",
      to: "February 2013",
    },
    title: "User Experience Designer",
    location: "Aveiro, Portugal",
    description:
      "Developed projects in JavaScript, HTML and CSS in the healthcare field",
  },
];

const skills = [
  {
    name: "JavaScript",
    backgroundColor: "#F4A261",
  },
  { name: "HTML", backgroundColor: "#E9C46A" },
  { name: "CSS", backgroundColor: "#2A9D8F" },
  {
    name: "React",
    backgroundColor: "#264653",
  },
  {
    name: "TypeScript",
    backgroundColor: "#F4A261",
  },
  {
    name: "Jest",
    backgroundColor: "#E9C46A",
  },
  {
    name: "Vuejs",
    backgroundColor: "#E76F51",
  },
  { name: "Webpack", backgroundColor: "#2A9D8F" },
  { name: "Redux", backgroundColor: "#E9C46A" },
  { name: "Design Systems", backgroundColor: "#F4A261" },
  { name: "Styled components", backgroundColor: "#264653" },
  { name: "Git", backgroundColor: "#F4A261" },
  { name: "CI/CD", backgroundColor: "#264653" },
  { name: "Tailwind", backgroundColor: "#E9C46A" },
  { name: "Next.js", backgroundColor: "#2A9D8F" },
  { name: "Emotion CSS", backgroundColor: "#264653" },
  { name: "Playwright", backgroundColor: "#E9C46A" },
  { name: "Accessibility", backgroundColor: "#2A9D8F" },
];

export { jobs, skills };
