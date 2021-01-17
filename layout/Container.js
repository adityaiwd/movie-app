import styled from 'styled-components'

const Container = styled.div`
    max-width: 60rem;
    margin: 1rem auto;
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);
    border-radius: 1rem;
    overflow:hidden;
    position:relative;
    width:47rem;

    min-height: 90rem;
    @media only screen and (max-width:37.5em){
        border-radius:0;
        margin:0 0;
        width:100vw;
    }
`

export default Container
