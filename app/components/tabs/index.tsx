import { ReactNode, useState } from "react";

type Tab = {
  title: string;
  anchor?: string;
  id: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const getActiveTab = (id: string) => {
    return tabs.filter((tab) => {
      return tab.id === id;
    })[0];
  };

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const handleOnClick = (id: string) => {
    setActiveTab(getActiveTab(id));
  };

  return (
    <section>
      <ul className="flex mb-4">
        {tabs.map((tab) => (
          <li
            className={`mr-4 font-semibold ${activeTab.id === tab.id && "text-orangeDark border-b"}`}
            key={tab.title}
          >
            {tab.anchor ? (
              <a href={`#${tab.anchor}`} onClick={() => handleOnClick(tab.id)}>
                {tab.title}
              </a>
            ) : (
              <button onClick={() => handleOnClick(tab.id)}>{tab.title}</button>
            )}
          </li>
        ))}
      </ul>

      <section>{activeTab.content}</section>
    </section>
  );
};

export default Tabs;
