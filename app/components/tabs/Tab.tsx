import { ReactNode } from "react";

type TabProps = {
  content: ReactNode;
};

const Tab = ({ content }: TabProps) => {
  return <div>{content}</div>;
};

export default Tab;
