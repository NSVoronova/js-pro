import React from "react";
import {  Link, useParams } from "react-router-dom";
import Title from "src/components/Title/Title";
import "./PostViewPage.css";
import ModalWindow from "src/components/ModalWindow/ModalWindow";
import { IPost } from "../PostsList";
import { useSelector, useDispatch } from "react-redux";

export interface IState {
  theme: string,
  modalInfo: {
    isOpen: boolean,
    id: number,
  },
  posts: [] | IPost[],
  activeTab: string,
}
const PostViewPage = () => {

  const currentState = useSelector( (state: IState) => state);
  const dispatch = useDispatch();
let posts = currentState.posts;
let params = useParams();
let id = 0;
if (params.id) {
   id = parseInt(params.id)
}

  let nextId = id + 1;
  let previousId = id - 1;
  return (
    <div className="post__view">
      <Link to={`/posts`}>Back to posts</Link>
      {Array.isArray(posts) && posts.map(({ id: postId, title, image, text, date, likes }: IPost) => (
        postId === id ?
      <><Title text={title} />
      <img
        src={image}
        alt="avada"
        onClick={() => {
          dispatch({ type: "TOGGLE_MODAL", openModal: true, payload: id });
        }} 
      />
      <p>{text}</p>
      <div className="reactions">
        <div>
        <span
              onClick={() => dispatch({ type: "ADD_LIKE", payload: id  })}
            >
              👍
            </span><span>{likes || 0}</span>{" "} <span
              onClick={() =>
                dispatch({ type: "REMOVE_LIKE", payload: id })
              }
            >
              👎
            </span>
        </div>
        <div>
          <div className="bookmark">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6924/6924811.png"
              alt="#"
            />
            <span> Add to favorites</span>
          </div>
        </div>
      </div>
      <div className="posts__navigation">
        {id > 1 ? (
          <div>
            <Link to={`/post/${previousId}`}>
              🠔 Previous Post
            </Link>
          </div>
        ) : (
          <div>🠔 Previous Post</div>
        )}
        {id < posts.length ? (
          <div>
            <Link to={`/post/${nextId}`}>
              Next post 🠖
            </Link>
          </div>
        ) : (
          <div>Next post 🠖</div>
        )}
      </div>
      <ModalWindow>
      <img src={posts[previousId].image} alt="modal" style={{ width: "700px" }} />
          </ModalWindow> 
      </> : <></>))}
    </div>
  );
};

export default PostViewPage;
