import React from "react";
import { IPost } from "../PostsList";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MiddlePost: React.FC<IPost> = ({
  title,
  image,
  date,
  customClass,
  id,
  text,
  likes
}) => {
  const modalInfo: { isOpen: boolean; payload: number } = useSelector(
    ({modalInfo}) => modalInfo,
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className={customClass} key={id}>
        <img src={image} alt="#" />
        <div>{date}</div>
        <Link  to={`/post/${id}`}>
          <h3
            onClick={() => {
              dispatch({ type: "TOGGLE_MODAL", openModal: false, payload: id });
            }}
          >
            {title}
          </h3>
        </Link>
        <div className="reactions">
          <div>
            <span
              onClick={() => dispatch({ type: "ADD_LIKE", payload: id  })}
            >
              👍
            </span>
            <span>{likes || 0}</span>{" "}
            <span
              onClick={() =>
                dispatch({ type: "REMOVE_LIKE", payload: id })
              }
            >
              👎
            </span>
          </div>
          <div className="bookmark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6924/6924811.png"
              alt="#"
              onClick={() => {
                dispatch({type: "ADD_TO_FAVORITE",
              payload: id})
              }}
            />
            <img
              id="dots"
              src="https://cdn-icons-png.flaticon.com/512/4990/4990775.png"
              alt="#"
              onClick={() => {
                dispatch({
                  type: "TOGGLE_MODAL",
                  openModal: true,
                  payload: id,
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePost;
