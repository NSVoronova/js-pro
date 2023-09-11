import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../PostViewPage/PostViewPage";
import { IPost } from "../PostsList";
import MiddlePost from "../MiddlePost/MiddlePost";

const FavoritePosts = () => {
  const currentState = useSelector((state: IState) => state);
  let posts: IPost[] = currentState.posts;

  return (
    <div className="middle__post__wrapper">
      {Array.isArray(posts) &&
        posts
          .filter((post) => post.isFavorite === true)
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
    </div>
  );
};

export default FavoritePosts;
