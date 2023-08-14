import React, {useState} from 'react'
import Tab from '../Tab/Tab'
import "./style.css"

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabsData = [
    { label: 'All', content: ' Tab 1' },
    { label: 'My favorites', content: 'Tab 2' },
    { label: 'Popular', content: ' Tab 3' },
  ];

  return (
    <div className="tabs__container">
      <div className="tabs">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="tab-content">
        {tabsData[activeTab].content}
      </div>
    </div>
  );
};

export default TabContainer
