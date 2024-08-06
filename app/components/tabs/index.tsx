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

  const activeTabFromURL = () => {
    const hashname = window.location.hash.substring(1);

    return tabs.filter((tab) => {
      return tab.anchor === hashname;
    })[0];
  };

  const [activeTab, setActiveTab] = useState<Tab>(
    activeTabFromURL() || tabs[0],
  );

  const handleOnClick = (id: string) => {
    setActiveTab(getActiveTab(id));
  };

  return (
    <section>
      <nav className="pt-1 w-full tabs top-24 bg-white border-b-black border-b">
        <ul className="flex mb-4 pt-2.5">
          {tabs.map((tab) => (
            <li
              className={`mr-4 font-semibold ${activeTab.id === tab.id && "text-orangeDark border-b"}`}
              key={tab.title}
            >
              {tab.anchor ? (
                <a
                  href={`#${tab.anchor}`}
                  onClick={() => handleOnClick(tab.id)}
                >
                  {tab.title}
                </a>
              ) : (
                <button onClick={() => handleOnClick(tab.id)}>
                  {tab.title}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <section className="pt-5">{activeTab.content}</section>
    </section>
  );
};

export default Tabs;
