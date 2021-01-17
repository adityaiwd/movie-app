import React from 'react'
import styled from 'styled-components'

const Name = styled.h2`
    font-weight:500;
    font-size:1.1rem;
    line-height:2.4rem;
    color:#12153D;
`

const Wrapper = styled.div`
    border: 1.5px solid var(--color-grey-dark-3);
    border-radius:5rem;
    padding: 0 1.5rem;
    margin-left:2rem;
`

const Genre = ({children,...rest}) => {
    return (
        <Wrapper {...rest}>
            <Name>{children}</Name>
        </Wrapper>
    )
}

export default Genre
