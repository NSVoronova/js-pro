import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Input from "../SignForm/Input/Input";
import { IPost } from "../Posts/PostsList";
import MiddlePost from "../Posts/MiddlePost/MiddlePost";
import "./SearchPage.css";
import {
  StyledMain,
  StyledFooter,
  StyledWrapper,
} from "../MainLayout/styledLayout";
import { useSelector } from "react-redux";
import Title from "../Title/Title";
import instance from "src/axiosConfig/axiosConfig";

const SearchPage = () => {

  const theme = useSelector(({ theme }) => theme);
  const [resultPosts, setResultPosts] = useState<IPost[]>([]);
  const posts = useSelector(({posts}) => posts);

  const [dataSearch, setDataSearch] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await instance.get(`/blog/posts/?search=${dataSearch}&limit=20`);
       let result = response.data;
       setResultPosts(result.results);
        console.log(resultPosts);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [dataSearch]);
  

  // let searchPosts = posts.filter((post: IPost) => {
  //   return post.title.toLowerCase().includes(dataSearch);
  // });

  return (
    <StyledWrapper theme={theme} className="wrapper">
      <Header isLight={true}>
        <Input
          placeholder="Search"
          type="text"
          value={dataSearch}
          onChange={setDataSearch}
        />
      </Header>
      <StyledMain theme={theme}>
        <Title text="Search results "></Title>{" "}
        <h1 className="search__span">{dataSearch}</h1>
        <div>
          {Array.isArray(resultPosts) &&
            resultPosts.map(({ id, title, image, text, date }: IPost) =>
              dataSearch.length > 1 ? (
                <MiddlePost
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  image={image}
                  date={date}
                  customClass="search__post"
                />
              ) : null
            )}
        </div>
      </StyledMain>
      <StyledFooter theme={theme}>
        <span>2022</span>
        <span>All rights reserved</span>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default SearchPage;
