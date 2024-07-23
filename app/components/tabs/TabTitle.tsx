type TabTitleProps = {
  title: string;
  setSelectedTab: () => void;
  isActive: boolean;
  cssClass: string | boolean;
};

const TabTitle = ({ title, setSelectedTab, cssClass }: TabTitleProps) => {
  return (
    <li>
      <button className={`${cssClass}`} onClick={() => setSelectedTab()}>
        {title}
      </button>
    </li>
  );
};

export default TabTitle;
