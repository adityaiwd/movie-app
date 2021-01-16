import React from 'react'
import styled from 'styled-components'
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const Wrapper = styled.div`
    text-align:center;
`

const MovieImage = styled.img`
    border-radius:5rem;
`

const Title = styled.h1`
    font-weight:600;
    font-size:3.2rem;
`

const Rating = styled.h3`
    font-size:1.8rem;
    font-weight:500;
`

const Poster = ({title,rating}) => {
    return (
        <Wrapper>
              <MovieImage src="https://via.placeholder.com/300x450" alt="movie poster"/>
              <Title>{title}</Title>
              <Rating><StarRoundedIcon/>{rating}</Rating>          
        </Wrapper>
    )
}

export default Poster
