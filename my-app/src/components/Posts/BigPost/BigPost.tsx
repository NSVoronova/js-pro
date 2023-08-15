import React from 'react'
import { IPost } from '../PostsList'
import "./style.css"

const BigPost = ({ title, text, image, date }: IPost): JSX.Element => {
  return (
    <div className='big__post__wrapper'>
      <div className='big__post'>
        <div className='post__decription'>
          <div>{date}</div>
          <h3>{title}</h3>
          <div>{text}</div>


        </div>
        <img src={image} alt="#" />
      </div>
      <div className='reactions'><div>👍<span>20</span> 👎</div>
        <div className="bookmark">
          <img src="https://cdn-icons-png.flaticon.com/512/6924/6924811.png" alt="#" />
          <img id='dots' src="https://cdn-icons-png.flaticon.com/512/4990/4990775.png" alt="#" />
        </div>
      </div>
    </div>
  )
}

export default BigPost
