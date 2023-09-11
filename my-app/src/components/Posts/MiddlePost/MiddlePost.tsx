import React from "react";
import { IPost } from "../PostsList";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_LIKE_CREATOR,
  ADD_TO_FAVORITE_CREATOR,
  REMOVE_LIKE_CREATOR,
  TOGGLE_MODAL_CREATOR,
} from "src/actions/actions";

const MiddlePost: React.FC<IPost> = ({
  title,
  image,
  date,
  customClass,
  id,
  text,
  likes,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={customClass} key={id}>
        <img src={image} alt="#" />
        <div>{date}</div>
        <Link to={`/post/${id}`}>
          <h3
          // onClick={() => {
          //   dispatch({ type: "TOGGLE_MODAL", openModal: false, payload: id });
          // }}
          >
            {title}
          </h3>
        </Link>
        <div className="reactions">
          <div>
            <span onClick={() => dispatch(ADD_LIKE_CREATOR(id))}>👍</span>
            <span>{likes || 0}</span>{" "}
            <span onClick={() => dispatch(REMOVE_LIKE_CREATOR(id))}>👎</span>
          </div>
          <div className="bookmark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6924/6924811.png"
              alt="#"
              onClick={() => {
                dispatch(ADD_TO_FAVORITE_CREATOR(id));
              }}
            />
            <img
              id="dots"
              src="https://cdn-icons-png.flaticon.com/512/4990/4990775.png"
              alt="#"
              onClick={() => {
                dispatch(TOGGLE_MODAL_CREATOR(true, id));
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePost;
