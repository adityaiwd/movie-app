import React from 'react'
import styled from 'styled-components'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchIcon from '@material-ui/icons/Search';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto 4rem;
`


const Navbar = () => {
    return (
        <Wrapper>
            <MenuRoundedIcon fontSize="large" />
            <SearchIcon fontSize="large" />
        </Wrapper>
    )
}


export default Navbar
