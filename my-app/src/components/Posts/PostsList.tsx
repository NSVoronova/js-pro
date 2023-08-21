import React, {useState, useEffect} from 'react'
import BigPost from './BigPost/BigPost'
import MiddlePost from './MiddlePost/MiddlePost'
import LittlePost from './LittlePost/LittlePost'
import './style.css'

export interface IPost {
  image: string,
  text: string,
  date: string,
  lesson_num?: number,
  title: string,
  author?: number,
  id: number,
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

  useEffect(()=>{
    fetchPosts()
  },[])
  
  return (
    <>
      <div className='posts__wrapper'>
        <div className='big-middle__posts'>
          <div className='big__post post'>
          { Array.isArray(posts) && posts.map(({id, title, image, text, date}: IPost) => (
        id === 1  ? (
          <BigPost key={image} id={id} title={title} text={text} image={image} date={date} />) : <></>))}
          </div>
          <div className='middle__posts post'>
          {Array.isArray(posts) && posts.map(({id, title, image, text, date}: IPost) => (
        id > 1 && id < 6  ? (
          <MiddlePost key={image} id={id} title={title} text={text} image={image} date={date} />) : <></>))}
          </div>
        </div>
          <div className='little__posts post'>
          { Array.isArray(posts) && posts.map(({id, title, image, text, date}: IPost) => (
        id > 5  ? (
          <LittlePost key={image} id={id} title={title} text={text} image={image} date={date} />) : <></>))}
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
