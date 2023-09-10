import React from "react";
import MiddlePost from "./MiddlePost/MiddlePost";
import "./PostsListStyle.css";
import "../SignForm/Input/styled";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useSelector } from "react-redux";

export interface IPost {
  image: string;
  text: string;
  date: string;
  lesson_num?: number;
  title: string;
  author?: number;
  id: number;
  customClass: string;
  likes?: number;
  isFavorite?: boolean;
}

const PostsList = () => {
  const posts = useSelector(({posts}) => posts);
  const modalInfo = useSelector(({modalInfo}) => modalInfo)
  
  return (
    <>
      <div className="posts__wrapper">
        <div className="middle__post__wrapper">
          {Array.isArray(posts) &&
            posts.map(({ id, title, image, text, date, likes }: IPost) =>
              id < 7 ? (
                <MiddlePost
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  image={image}
                  date={date}
                  likes={likes}
                  customClass="middle__post"
                />
              ) : null
            )}
        </div>
        <div className="small__post__wrapper">
          {Array.isArray(posts) &&
            posts.map(({ id, title, image, text, date, likes }: IPost) =>
              id >= 7 ? (
                <MiddlePost
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  image={image}
                  date={date}
                  likes={likes}
                  customClass="small__post"
                />
              ) : null
            )}
        </div>
      </div>
      <div className="pagination">
        <div>🠔 Назад</div>
        <div>1 2 3 ... 6</div>
        <div>Вперед 🠖</div>
      </div>
      <ModalWindow>
        {Array.isArray(posts) &&
          posts
            .filter((post) => post.id === modalInfo.id)
            .map(({ id, title, image, text, date, likes }: IPost) => (
              <MiddlePost
                key={id}
                id={id}
                title={title}
                text={text}
                image={image}
                date={date}
                likes={likes}
                customClass="modal__post"
              />
            ))}
      </ModalWindow>
    </>
  );
};

export default PostsList;
