import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import MiddlePost from './MiddlePost/MiddlePost'
import './PostsListStyle.css'
import '../SignForm/Input/styled'
import ModalWindow from '../ModalWindow/ModalWindow'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export interface IPost {
  image: string,
  text: string,
  date: string,
  lesson_num?: number,
  title: string,
  author?: number,
  id: number,
  customClass: string,
}

const PostsList = () => {
  const modalInfo: { isOpen: boolean; id: number } = useSelector(
    (state: { modalInfo: { isOpen: boolean; id: number} }) => state.modalInfo
  );

  const dispatch = useDispatch();
  
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



  return (
    <>
      <div className='posts__wrapper'>
        <div className='middle__post__wrapper'>
          {Array.isArray(posts) && posts.map(({ id, title, image, text, date }: IPost) => (
            id < 7 ?
               <MiddlePost key={image} id={id} title={title} text={text} image={image} date={date} customClass='middle__post' /> : <></>))}
        </div>
        <div className='small__post__wrapper'>
          {Array.isArray(posts) && posts.map(({ id, title, image, text, date }: IPost) => (
            id >= 7 ?
        <MiddlePost key={id} id={id} title={title} text={text} image={image} date={date} customClass='small__post' /> : <></>))}
        </div>
      </div>
      <div className='pagination'>
        <div>🠔 Назад</div>
        <div>1 2 3 ... 6</div>
        <div>Вперед 🠖</div>
      </div>
      <ModalWindow>
      {Array.isArray(posts) &&
          posts.map(({ id, title, image, text, date }: IPost) =>
            id === modalInfo.id ? (
              <MiddlePost
                key={image}
                id={id}
                title={title}
                text={text}
                image={image}
                date={date}
                customClass="modal__post"
              />
            ) : (
              <></>
            )
          )}
      </ModalWindow>
    </>
  )
}

export default PostsList
