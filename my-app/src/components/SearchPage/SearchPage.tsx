import React, {useState, ChangeEvent, useEffect} from 'react'
import Header from '../Header/Header'
import Input from '../SignForm/Input/Input'
import { StyledInput } from '../SignForm/Input/styled'
import MainLayout from '../MainLayout/MainLayout'
import { IPost } from '../Posts/PostsList'
import MiddlePost from '../Posts/MiddlePost/MiddlePost'
import "./SearchPage.css"
import { StyledMain, StyledFooter, StyledWrapper } from '../MainLayout/styledLayout';
import { useSelector } from 'react-redux'
import Title from '../Title/Title'

const SearchPage = () => {
  const theme = useSelector(({theme}) => theme);

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

  return (
    <StyledWrapper  theme={theme} className='wrapper'>
      <Header>
      <Input
          placeholder="Search"
          type="text"
          value={dataSearch}
          onChange={setDataSearch}
        />
      </Header>
      <StyledMain theme={theme}>
        <Title text='Search results '></Title> <h1 className='search__span'>{dataSearch}</h1>
        <div>
          {Array.isArray(searchPosts) && searchPosts.map(({ id, title, image, text, date }: IPost) => (
            dataSearch.length >2 ? <MiddlePost key={id} id={id} title={title} text={text} image={image} date={date} customClass='search__post' /> : null ))}
        </div>
      </StyledMain>
      <StyledFooter theme={theme}>
        <span>2022</span>
        <span>All rights reserved</span>
      </StyledFooter>
    </StyledWrapper>
  );
}

export default SearchPage
