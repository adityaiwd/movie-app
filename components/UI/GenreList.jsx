import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Genre from './Genre'

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
        <div >
            <ScrollMenu data={Menu(list)} scrollToSelected />
        </div>
    )
}

export default GenreList
