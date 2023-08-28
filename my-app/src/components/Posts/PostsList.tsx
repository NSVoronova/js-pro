import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import MiddlePost from './MiddlePost/MiddlePost'
import './PostsListStyle.css'
import '../SignForm/Input/styled'

export interface IPost {
  image: string,
  text: string,
  date: string,
  lesson_num?: number,
  title: string,
  author?: number,
  id: number,
  customClass: string
}

const PostsList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  let fetchPosts = async () => {
    try {
      let responce = await fetch('https://64d916c7e947d30a2609e71e.mockapi.io/posts_cards');
      let jsonPosts: IPost[] = await responce.json();
      console.log(jsonPosts)
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
              <Link key={id} to={`/post/${id}`} state={{posts, id, title, image, text}}> <MiddlePost key={image} id={id} title={title} text={text} image={image} date={date} customClass='middle__post' /></Link> : <></>))}
        </div>
        <div className='small__post__wrapper'>
          {Array.isArray(posts) && posts.map(({ id, title, image, text, date }: IPost) => (
            id >= 7 ?
            <Link key={id} to={`/post/${id}`} state={{posts, id, title, image, text}}><MiddlePost key={id} id={id} title={title} text={text} image={image} date={date} customClass='small__post' /></Link> : <></>))}
        </div>
      </div>
      <div className='pagination'>
        <div>🠔 Назад</div>
        <div>1 2 3 ... 6</div>
        <div>Вперед 🠖</div>
      </div>
    </>
  )
}

export default PostsList
