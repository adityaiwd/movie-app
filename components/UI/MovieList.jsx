import React from 'react'
import Poster from './Poster'
import styled from 'styled-components'
import ScrollMenu from "react-horizontal-scrolling-menu";


const MovieList = ({listOfMovies,Loading}) => {
    const Menu = (list) =>
    list.map((movie) => {
      return <Poster poster={movie.poster_path} key={movie.id} id={movie.id} title={movie.title} rating={movie.vote_average}/>;
    });
    return (
        <div>
            <ScrollMenu itemClass="hor-scroll" menuStyle={{marginTop:"8rem"}} alignCenter data={Menu(listOfMovies)} scrollToSelected />
        </div>
    )
}

export default MovieList
