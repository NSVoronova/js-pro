import React from 'react'
import {IPost} from '../PostsList'
import './style.css'

const LittlePost = ({ title,  image, date }: IPost): JSX.Element => {
  return (
    <div className='little__post__wrapper'>
      <div className='little__post'>
      <div className='little__post__descroption'>
        <div>{date}</div>
        <h3>{title}</h3>
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

export default LittlePost
