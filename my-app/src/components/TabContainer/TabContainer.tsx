import React from "react";
import Tab from "../Tab/Tab";
import "./style.css";
import PostsList from "../Posts/PostsList";
import { IState } from "../Posts/PostViewPage/PostViewPage";
import { useSelector, useDispatch } from "react-redux";
import FavoritePosts from "../Posts/FavoritePosts/FavoritePosts";


const TabContainer = () => {

  const currentState = useSelector( (state: IState) => state);
  let currentTab = currentState.activeTab;
  const dispatch = useDispatch();

  const tabsData = [
    { label: "All", content: <PostsList /> },
    { label: "My favorites", content: <FavoritePosts/> },
    { label: "Popular", content: " Tab 3" },
  ];

  return (
    <div className="tabs__container">
      <div className="tabs">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={currentTab === tab.label}
            onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: tab.label})}
          />
        ))}
      </div>
      <div className="tab-content">{currentTab === "All" ? tabsData[0].content : currentTab === "Popular" ? tabsData[2].content : tabsData[1].content}</div>
    </div>
  );
};

export default TabContainer;
