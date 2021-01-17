import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Genre from './Genre'
import styled from 'styled-components'

const Wrapper = styled.div`
  position:relative;
  margin-bottom:5rem;
`

const list = [
    { name: "Action" },
    { name: "Crime" },
    { name: "Comedy" },
    { name: "Drama" },
    { name: "Biography" },
    { name: "Fantasy" },
    { name: "Sci-Fi" },
    { name: "Thriller" },
    { name: "Animation" },
    { name: "Horror" },
    { name: "Romance" },
  ];

const GenreList = () => {
    const Menu = (list) =>
    list.map((el) => {
      const { name } = el;
      return <Genre key={name}>{name}</Genre>;
    });
    return (
        <Wrapper>
            <ScrollMenu itemClass="hor-scroll" data={Menu(list)} scrollToSelected />
        </Wrapper>
    )
}

export default GenreList
