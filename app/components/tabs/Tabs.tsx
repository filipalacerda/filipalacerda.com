import { ReactNode, useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
  children: ReactNode[];
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            anchor={item.props.anchor}
            setSelectedTab={setSelectedTab}
            index={index}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
