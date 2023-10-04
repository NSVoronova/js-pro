import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { FETCH_MY_POSTS } from 'src/actions/actions';
import MiddlePost from '../Posts/MiddlePost/MiddlePost';
import { useSelector } from 'react-redux';
import { IPost } from '../Posts/PostsList';
import Title from '../Title';

const MyPosts = () => {
  const myPosts = useSelector(({ myPosts }) => myPosts);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  useEffect(() => {
    dispatch(FETCH_MY_POSTS());
  },[])
  return (
    <div>
      <Title text='My posts'></Title>
      {Array.isArray(myPosts) &&
            myPosts.map(({ id, title, image, text, date }: IPost) =>
               (
                <MiddlePost
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  image={image}
                  date={date}
                  customClass="middle__post"
                />
              )
            )}
    </div>
  )
}

export default MyPosts



