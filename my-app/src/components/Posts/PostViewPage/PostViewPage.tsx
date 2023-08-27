import React, {useState} from 'react'
import {useLocation, Link, useParams} from 'react-router-dom'
import Title from 'src/components/Title/Title'
import "./PostViewPage.css"

const PostViewPage = () => {
  const {state} = useLocation();
  const params = useParams();
let currentId;
 state.title ?  currentId = state.id : currentId = params.id;


 let posts = state.posts;
 
  let nextId = +currentId + 1;
  let previousId = +currentId - 1;
  return (
    <div className='post__view'>
      <Title text={state.title ? state.title : posts[previousId].title}/>
      <img src={state.image ? state.image : posts[previousId].image} alt="avada" />
      <p>{state.text ? state.text : posts[previousId].text}</p>
      <div className='reactions'>
        <div>👍<span>20</span> 👎</div>
        <div>
        <div className="bookmark">
          <img src="https://cdn-icons-png.flaticon.com/512/6924/6924811.png" alt="#" />
          <span> Add to favorites</span>
        </div>
        </div>
        </div>
      <div className="posts__navigation">
        {currentId > 1 ? <div><Link to={`/post/${previousId}`} state={{posts}}>🠔 Previous Post</Link></div> : <div>🠔 Previous Post</div>}
        {currentId < posts.length ?  <div><Link to={`/post/${nextId}`} state={{posts}}>Next post 🠖</Link></div> : <div>Next post 🠖</div>}
     
      </div>
    </div>
  )
}

export default PostViewPage
