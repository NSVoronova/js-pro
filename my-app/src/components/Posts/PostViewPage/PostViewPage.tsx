import React from 'react'
import Title from 'src/components/Title/Title'
import "../BigPost/style.css"
import "./PostViewPage.css"

const PostViewPage = () => {
  return (
    <div className='post__view'>
      <Title text="Avada Kedavrrrra!!"/>
      <img src="https://chakiris.club/uploads/posts/2023-01/1674747941_chakiris-club-p-volandemort-iz-garri-pottera-oboi-3.jpg" alt="avada" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi voluptas dignissimos atque facere nihil corrupti voluptatum officiis nisi, magnam eius id? Modi at voluptate repellendus nesciunt, iure quibusdam et!
      Amet minima mollitia aspernatur, nesciunt esse beatae eius voluptates consequuntur id consectetur in, dignissimos reiciendis ab ducimus! Ab nemo harum similique! Exercitationem maiores expedita esse quasi repellat rem sint vitae?
      Magnam in tempore illo perferendis assumenda nobis odio blanditiis architecto deserunt voluptatibus sed error, omnis porro pariatur nam, nulla placeat dicta vel aliquid! Rem, consequatur! Cumque unde nostrum laboriosam explicabo?
      Quasi perferendis omnis deserunt tempore soluta ad sequi eligendi odio ipsum consectetur quod commodi voluptas nostrum cupiditate facilis delectus aut natus odit pariatur, consequuntur non ipsam labore et! Iusto, vitae.
      Impedit dolorem cupiditate at eligendi nobis quo, pariatur repellendus dolore, vero assumenda officiis architecto! Consequuntur at officiis modi nisi iure dicta eligendi assumenda impedit rem, debitis, eos dolore qui facilis?</p>
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
      <div>🠔 Previous Post</div>
      <div>Next post 🠖</div>
      </div>
    </div>
  )
}

export default PostViewPage
