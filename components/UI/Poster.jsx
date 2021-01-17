import React from "react";
import styled from "styled-components";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Link from "next/link";

const Wrapper = styled.div`
  text-align: center;
  margin-right: 3rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieImage = styled.img`
  border-radius: 5rem;
  align-self: center;
  height: 40rem;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.3rem;
  margin: 1.5rem 0;

  width: 30rem;
`;

const Rating = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Poster = ({ title, rating, poster, id }) => {
  return (
    <Link href={`/movie/${id}`}>
      <Wrapper>
        <MovieImage
          src={"http://image.tmdb.org/t/p/w342/" + poster}
          alt="movie poster"
        />
        <Title>{title}</Title>
        <Rating>
          <StarRoundedIcon
            style={{ marginRight: "1rem", fontSize: 16, color: "#FCC419" }}
          />
          {rating}
        </Rating>
      </Wrapper>
    </Link>
  );
};

export default Poster;