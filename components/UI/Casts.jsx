import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
    text-align:center;
    margin-right:2rem;
`;

const Komuk = styled.img`
  border-radius: 0;
  overflow:hidden;
  height: 10rem;
  width: 10rem;
  object-fit:cover;
    
border-radius:50%;
`;

const Casts = ({ profpic,name,role }) => {
  return (
    profpic && <Wrapper>
      <Komuk src={"http://image.tmdb.org/t/p/w342/" + profpic} alt="profile picture"/>
      <p style={{fontWeight:600}}>{name}</p>
      <p style={{fontWeight:600,color:"#777"}}>{role}</p>
    </Wrapper>
  );
};

export default Casts;
