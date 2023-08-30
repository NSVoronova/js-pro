import React from "react";
import { IPost } from "../PostsList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MiddlePost = ({
  title,
  image,
  date,
  customClass,
  id,
  text,
}: IPost): JSX.Element => {
  const modalInfo: { isOpen: boolean, payload: number } = useSelector(
    (state: { modalInfo: { isOpen: boolean, payload: number } }) => state.modalInfo
  );
  const dispatch = useDispatch();
 

  return (
    <>
      <div className={customClass} key={id}>
      <img src={image} alt="#" />
        <div>{date}</div>
        <Link key={id} to={`/post/${id}`} state={{id}}><h3 onClick={() => {
                dispatch({ type: "TOGGLE_MODAL", openModal: false, payload: id });
              }} >{title}</h3></Link>
        <div className="reactions">
          <div>
            👍<span>20</span> 👎
          </div>
          <div className="bookmark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6924/6924811.png"
              alt="#"
            />
            <img
              id="dots"
              src="https://cdn-icons-png.flaticon.com/512/4990/4990775.png"
              alt="#"
              onClick={() => {
                dispatch({ type: "TOGGLE_MODAL", openModal: true, payload: id });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePost;
