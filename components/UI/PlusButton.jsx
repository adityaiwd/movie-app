import React from 'react'
import styled from 'styled-components'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const Wrapper = styled.button`
    border:none;
    background-color:var(--color-primary);
    color:#fff;
    border-radius:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 1.5rem;
    transition: all .2s;
    cursor:pointer;
    &:hover{
        background-color:var(--color-primary-light);
    }
`

const PlusButton = () => {
    return (
        <Wrapper>
            <AddRoundedIcon style={{fontSize:25}}/>
        </Wrapper>
    )
}

export default PlusButton
