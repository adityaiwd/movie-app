import React, { useState } from "react";
import styled from "styled-components";
import ScrollMenu from "react-horizontal-scrolling-menu";

const ItemWrapper = styled.div`
  font-weight: 600;
  font-size: 2.8rem;
  margin-right: 4rem;

`;

const Active = styled.div`
    width:4rem;
    height:.6rem;
    border-radius:10rem;
    background-color:var(--color-primary);
`

const list = [
  { name: "In Theater" },
  { name: "Box Office" },
  { name: "Coming Soon" },
];


const Airing = () => {
  const [Selected, setSelected] = useState("In Theater");
  

  const MenuItem = ({ text, selected }) => {
    return (
      <ItemWrapper style={{ color: selected ? "#000" : "#777" }}>
        {text}
        {selected && <Active></Active>}
      </ItemWrapper>
    );
  };

  const Menu = (list, selected) =>
    list.map((el) => {
      const { name } = el;
      return <MenuItem text={name} key={name} selected={selected}/>;
    });
  
    return (
    <div style={{marginBottom:"4rem"}}>
      <ScrollMenu data={Menu(list)} selected={Selected} scrollToSelected onSelect={(key) => setSelected(key)}/>
    </div>
  );
};

export default Airing;
