import React, {useState, ChangeEvent, useEffect} from 'react'
import Header from '../Header/Header'
import Input from '../SignForm/Input/Input'
import { StyledInput } from '../SignForm/Input/styled'
import MainLayout from '../MainLayout/MainLayout'
import { IPost } from '../Posts/PostsList'
import MiddlePost from '../Posts/MiddlePost/MiddlePost'
import "./SearchPage.css"

const SearchPage = () => {
   const [dataSearch, setDataSearch] = useState("");
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

  let searchPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(dataSearch);
  });
  console.log(searchPosts, dataSearch);

  return (
    <div className='wrapper'>
      <Header>
      <Input
          placeholder="Search"
          type="text"
          value={dataSearch}
          onChange={setDataSearch}
        />
      </Header>
      <main>
        <h1>Search results <span className='search__span'>{dataSearch}</span></h1>
        <div>
          {Array.isArray(searchPosts) && searchPosts.map(({ id, title, image, text, date }: IPost) => (
            dataSearch.length >2 ? <MiddlePost key={id} id={id} title={title} text={text} image={image} date={date} customClass='search__post' /> : null ))}
        </div>
      </main>
      <footer>
        <span>2022</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
}

export default SearchPage
