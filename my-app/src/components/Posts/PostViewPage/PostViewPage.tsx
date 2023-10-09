import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Title from "src/components/Title/Title";
import "./PostViewPage.css";
import ModalWindow from "src/components/ModalWindow/ModalWindow";
import { IPost } from "../PostsList";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ADD_LIKE_CREATOR, ADD_TO_FAVORITE_CREATOR, FETCH_POST, REMOVE_LIKE_CREATOR, TOGGLE_MODAL_CREATOR } from "src/actions/actions";

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
  const navigate = useNavigate();
  const post = useSelector(({ currentPost }) => currentPost);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  let params = useParams();
  let id = 0;
  if (params.id) {
    id = parseInt(params.id)
  };

  let nextId = id + 1;
  let previousId = id - 1;


  useEffect(() => {
    dispatch(FETCH_POST(id));
  }, [id]);


  return (
    <div className="post__view">
      <Link to={`/posts`}>Back to posts</Link>
      <div><Title text={post.title} key={id} />
        <img
          src={post.image}
          alt="avada"
          onClick={() => {
            dispatch(TOGGLE_MODAL_CREATOR(true, id));
          }}
        />
        <p>{post.text}</p>
        <div className="reactions">
          <div>
            <span
              onClick={() => dispatch(ADD_LIKE_CREATOR(id))}
            >
              👍
            </span><span>{0}</span>{" "} <span
              onClick={() =>
                dispatch(REMOVE_LIKE_CREATOR(id))
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
                onClick={() => {
                  dispatch(ADD_TO_FAVORITE_CREATOR(id));
                }}
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
          {(
            <button onClick={() => navigate(`/post/${nextId}`)}>
                Next post 🠖
            </button>
          )}
        </div>
        <ModalWindow>
          <img src={post.image} alt="modal" style={{ width: "700px" }} />
        </ModalWindow>
      </div>
    </div>
  );
};


  export default PostViewPage;
