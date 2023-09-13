import React, { useEffect } from "react";
import Tab from "../Tab/Tab";
import "./style.css";
import PostsList from "../Posts/PostsList";
import { useSelector, useDispatch } from "react-redux";
import FavoritePosts from "../Posts/FavoritePosts/FavoritePosts";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  FETCH_POSTS,
  SET_ACTIVE_TAB_CREATOR,
} from "src/actions/actions";

const TabContainer = () => {
  const currentTab = useSelector(({ activeTab }) => activeTab);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  

  useEffect(() => {
    dispatch(FETCH_POSTS());
  }, []);

  const tabsData = [
    { label: "All", content: <PostsList /> },
    { label: "My favorites", content: <FavoritePosts /> },
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
            onClick={() => dispatch(SET_ACTIVE_TAB_CREATOR(tab.label))}
          />
        ))}
      </div>
      <div className="tab-content">
        {currentTab === "All"
          ? tabsData[0].content
          : currentTab === "Popular"
          ? tabsData[2].content
          : tabsData[1].content}
      </div>
    </div>
  );
};

export default TabContainer;
