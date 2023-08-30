import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import Title from "src/components/Title/Title";
import "./PostViewPage.css";
import ModalWindow from "src/components/ModalWindow/ModalWindow";
import { IPost } from "../PostsList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PostViewPage = () => {

  const modalInfo: { isOpen: boolean, payload: number } = useSelector(
    (state: { modalInfo: { isOpen: boolean, payload: number } }) => state.modalInfo
  );
  const dispatch = useDispatch();

  const { state } = useLocation();
  console.log(state); //{id=...}
  
  const [posts, setPosts] = useState<IPost[]>([]);
  let fetchPosts = async () => {
    try {
      let responce = await fetch('https://64d916c7e947d30a2609e71e.mockapi.io/posts_cards');
      let jsonPosts: IPost[] = await responce.json();
      setPosts(jsonPosts);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  
  let nextId = state.id + 1;
  let previousId = state.id - 1;
  return (
    <div className="post__view">
      {Array.isArray(posts) && posts.map(({ id, title, image, text, date }: IPost) => (
        id === state.id ?
      <><Title text={state.title ? state.title : posts[previousId].title} />
      <img
        src={state.image ? state.image : posts[previousId].image}
        alt="avada"
        onClick={() => {
          dispatch({ type: "TOGGLE_MODAL", openModal: true, payload: id });
        }} 
      />
      <p>{state.text ? state.text : posts[previousId].text}</p>
      <div className="reactions">
        <div>
          👍<span>20</span> 👎
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
        {state.id > 1 ? (
          <div>
            <Link to={`/post/${previousId}`} state={{ posts }}>
              🠔 Previous Post
            </Link>
          </div>
        ) : (
          <div>🠔 Previous Post</div>
        )}
        {state.id < posts.length ? (
          <div>
            <Link to={`/post/${nextId}`} state={{ posts }}>
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
